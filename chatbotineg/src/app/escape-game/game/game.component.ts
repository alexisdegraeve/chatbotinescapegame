import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  showInfo = true;

  closeInfo() {
    this.showInfo = false;
    console.log('START GAME');
  }
}
