import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme3',
  templateUrl: './enigme3.component.html',
  styleUrls: ['./enigme3.component.scss']
})
export class Enigme3Component  implements OnInit{
  solution = 15;
  total = 0;
  wrong = false;
  win = false;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 1;
  }

  ngOnInit(): void {
    this.gameService.playSoundPipe();
  }

  get authorized(){
    return this.gameService.enigmes[0] && this.gameService.enigmes[1] && !this.gameService.enigmes[2];
  }

  get output() {
    return  this.gameService.enigmes[2];
  }

  setSolution() {
    this.win = false;
    this.wrong = false;
    this.gameService.enigmes[2] = this.total === this.solution;
    if(this.gameService.enigmes[2]) {
      this.gameService.playSoundStageClear();
      this.win = true;
      this.gameService.score += 200;
    } else {
      this.wrong = true;
      this.gameService.playSoundBowserFalls();
    }
  }
}
