import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme4',
  templateUrl: './enigme4.component.html',
  styleUrls: ['./enigme4.component.scss']
})
export class Enigme4Component {
  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 1;
  }
}
