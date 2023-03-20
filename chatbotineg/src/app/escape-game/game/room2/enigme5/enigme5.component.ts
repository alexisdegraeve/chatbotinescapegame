import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme5',
  templateUrl: './enigme5.component.html',
  styleUrls: ['./enigme5.component.scss']
})
export class Enigme5Component implements OnInit {
  parkingnb = 0;
  solution = 87;
  wrong = false;
  win = false;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
  }

  ngOnInit(): void {
    this.gameService.playSoundPipe();
  }


  get output() {
    return  this.gameService.enigmes[4];
  }

  setSolution() {
    this.wrong = false;
    this.win = false;
    this.gameService.enigmes[4] = this.parkingnb === this.solution;
    if(this.gameService.enigmes[4]) {
      this.gameService.playSoundStageClear();
      this.gameService.score += 260;
      this.win = true;
    } else {
      this.wrong = true;
      this.gameService.playSoundBowserFalls();
    }
  }
}
