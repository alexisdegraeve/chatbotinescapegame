import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  showInfo = true;
  startgame = false;
  starttimer = false;

  closeInfo() {
    this.showInfo = false;
    console.log('START GAME');
    this.startgame = true;
    this.starttimer = true;
  }

  stopTimer() {
    console.log('Timer STOP');
  }

  stopGame() {
    this.startgame = false;
    this.starttimer = false;
    this.showInfo = true;
  }
}
