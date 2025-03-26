import { AfterViewInit, Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-win',
    templateUrl: './win.component.html',
    styleUrls: ['./win.component.scss'],
    standalone: false
})
export class WinComponent implements AfterViewInit{
  constructor(private gameService: GameService) {
  }

  ngAfterViewInit(): void {
    this.gameService.playSoundWorldClear();
    this.gameService.startTimer = false;
  }

  get score() {
    return this.gameService.score;
  }
}
