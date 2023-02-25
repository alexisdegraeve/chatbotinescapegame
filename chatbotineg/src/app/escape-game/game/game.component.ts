import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  showInfo = true;
  startgame = false;
  starttimer = false;

  constructor(private router: Router, private gameService: GameService) {
    this.gameService.showInformationBar = false;
  }

  closeInfo() {
    this.showInfo = false;
    console.log('START GAME');
    this.startgame = true;
    this.router.navigate(['/enigme1']);
    /* this.starttimer = true; */
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
