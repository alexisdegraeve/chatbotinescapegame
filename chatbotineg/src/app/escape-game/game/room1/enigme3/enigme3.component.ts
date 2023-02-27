import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme3',
  templateUrl: './enigme3.component.html',
  styleUrls: ['./enigme3.component.scss']
})
export class Enigme3Component {
  solution = 15;
  total = 0;
  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 1;
  }

  get authorized(){
    return this.gameService.enigmes[0] && this.gameService.enigmes[1] && !this.gameService.enigmes[2];
  }

  get output() {
    return  this.gameService.enigmes[2];
  }

  setSolution() {
    this.gameService.enigmes[2] = this.total === this.solution;
    if(this.gameService.enigmes[2]) {
      this.gameService.score += 200;
    }
  }
}
