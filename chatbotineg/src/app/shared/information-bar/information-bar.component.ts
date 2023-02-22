import { Component } from '@angular/core';
import { GameService } from 'src/app/escape-game/game/game.service';

@Component({
  selector: 'app-information-bar',
  templateUrl: './information-bar.component.html',
  styleUrls: ['./information-bar.component.scss']
})
export class InformationBarComponent {

  constructor (private gameService: GameService) {
  }

  get score() {
    return this.gameService.score;
  }

  get enigmes() {
    return this.gameService.enigmes;
  }
}
