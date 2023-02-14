import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  showInfo = true;
  startgame = false;

  closeInfo() {
    this.showInfo = false;
    console.log('START GAME');
    this.startgame = true;
  }
}
