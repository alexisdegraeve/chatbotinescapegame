import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme5',
  templateUrl: './enigme5.component.html',
  styleUrls: ['./enigme5.component.scss']
})
export class Enigme5Component {
  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
  }
}
