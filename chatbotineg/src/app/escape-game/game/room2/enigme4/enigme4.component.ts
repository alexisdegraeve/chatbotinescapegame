import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme4',
  templateUrl: './enigme4.component.html',
  styleUrls: ['./enigme4.component.scss']
})
export class Enigme4Component implements OnInit {
  moveMatche = false;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 4;
  }

  ngOnInit(): void {
    this.gameService.playSoundPipe();
  }

  moveMatches() {
    this.moveMatche = true;
    this.gameService.enigmes[3] = true;
    if(this.gameService.enigmes[3]) {
      this.gameService.playSoundStageClear();
      this.gameService.score += 160;
    }
  }

  get output() {
    return  this.gameService.enigmes[3];
  }
}
