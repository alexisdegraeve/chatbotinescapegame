import { Component } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent {
  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = false;
  }
}
