import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent {
  constructor(private gameService: GameService) {
  }

  get score() {
    return this.gameService.score;
  }
}
