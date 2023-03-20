import { Component } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(private gameService: GameService) {
    this.gameService.restartGame();
    this.gameService.showInformationBar = false;
  }

  playCoin() {
    this.gameService.playSoundCoin();
  }
}
