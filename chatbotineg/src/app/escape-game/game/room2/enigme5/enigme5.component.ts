import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme5',
  templateUrl: './enigme5.component.html',
  styleUrls: ['./enigme5.component.scss']
})
export class Enigme5Component {
  parkingnb = 0;
  solution = 87;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
  }


  get output() {
    return  this.gameService.enigmes[4];
  }

  setSolution() {
    this.gameService.enigmes[4] = this.parkingnb === this.solution;
    if(this.gameService.enigmes[4]) {
      this.gameService.score += 260;
    }
  }
}
