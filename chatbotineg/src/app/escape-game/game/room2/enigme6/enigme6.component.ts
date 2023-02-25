import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme6',
  templateUrl: './enigme6.component.html',
  styleUrls: ['./enigme6.component.scss']
})
export class Enigme6Component {
  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
  }
}
