import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme3',
  templateUrl: './enigme3.component.html',
  styleUrls: ['./enigme3.component.scss']
})
export class Enigme3Component {
  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 1;
  }
}
