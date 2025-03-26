import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from 'src/app/escape-game/game/game.service';

@Component({
    selector: 'app-information-bar',
    templateUrl: './information-bar.component.html',
    styleUrls: ['./information-bar.component.scss'],
    standalone: false
})
export class InformationBarComponent {

  @Output() stopTimerEvent = new EventEmitter();

  constructor (private gameService: GameService) {
  }

  get score() {
    return this.gameService.score;
  }

  get enigmes() {
    return this.gameService.enigmes;
  }

  get roomNumber() {
    return this.gameService.roomNumber;
  }

  get showInformationBar() {
    return this.gameService.showInformationBar;
  }

  get startTimer() {
    return this.gameService.startTimer;
  }

}
