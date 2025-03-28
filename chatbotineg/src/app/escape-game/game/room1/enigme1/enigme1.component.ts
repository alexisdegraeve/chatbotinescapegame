import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
    selector: 'app-enigme1',
    templateUrl: './enigme1.component.html',
    styleUrls: ['./enigme1.component.scss'],
    animations: [
        trigger('enterAnimation', [
            transition(':leave', [
                style({ transform: 'translateX(0)', opacity: 1 }),
                animate('500ms', style({ transform: 'translateX(-100%)', opacity: 0 }))
            ])
        ])
    ],
    standalone: false
})
export class Enigme1Component implements OnInit {

  moveMountain() {
    this.gameService.playSoundCoin();
    this.gameService.mountain = false;
    this.gameService.showSimon = true;
    this.gameService.score = 200;
  }

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 1;
  }

  ngOnInit(): void {
    this.gameService.playSoundPipe();
  }

  get showMoutain() {
    return this.gameService.mountain;
  }

  getShowSimon() {
    return this.gameService.showSimon;
  }

  get passDoor() {
    return this.gameService.keyHobbit;
  }

  playCoin() {
    this.gameService.playSoundCoin();
  }

}
