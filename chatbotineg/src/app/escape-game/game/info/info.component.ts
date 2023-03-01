import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input()show = false;
  @Output() closeInfoEvent = new EventEmitter();

  constructor (private gameService: GameService) {
  }

  startGame() {
    this.gameService.startTimer = true;
    this.closeInfoEvent.emit(true);
  }
}
