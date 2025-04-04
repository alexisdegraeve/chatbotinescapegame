import { AfterViewInit, Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-gameover',
    templateUrl: './gameover.component.html',
    styleUrls: ['./gameover.component.scss'],
    standalone: false
})
export class GameoverComponent implements AfterViewInit {

  constructor(private gameService: GameService) {
  }

  ngAfterViewInit(): void {
    this.gameService.playSoundGameover();
    this.gameService.startTimer = false;
  }

}
