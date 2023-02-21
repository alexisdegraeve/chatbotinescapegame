import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme1',
  templateUrl: './enigme1.component.html',
  styleUrls: ['./enigme1.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class Enigme1Component {

  moveMountain() {
    this.gameService.mountain = false;
    this.gameService.showSimon = true;
  }

  constructor(private gameService: GameService) {

  }

  getMountain() {
    return this.gameService.mountain;
  }

  getShowSimon() {
    return this.gameService.showSimon;
  }

}
/* Rejouer la musique */
