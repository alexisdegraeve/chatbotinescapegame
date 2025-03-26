import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
    selector: 'app-enigme2',
    templateUrl: './enigme2.component.html',
    styleUrls: ['./enigme2.component.scss'],
    standalone: false
})
export class Enigme2Component implements OnInit {
  max_x= 10;
  max_y = 10;
  nbX = 0;
  nbY = 0;
  try = 8;
  wrong = false;
  win = false;
  showBubbble = true;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
  }

  ngOnInit(): void {
    this.gameService.playSoundPipe();
    this.showBubbble = true;
    this.startGame();
  }

  startGame() {
    this.win = false;
    this.wrong = false;
    this.try = 8;
    this.nbX = this.getRandomInt(this.max_x);
    this.nbY = this.getRandomInt(this.max_y);
    console.log(this.nbX);
    console.log(this.nbY);
  }

  checkFace(i:number, j:number) {
    if ((i == this.nbX) && (j === this.nbY)) {
      console.log('GAGNE');
      this.win = true;
      this.gameService.score += 250;
      this.showBubbble = false;
      this.gameService.enigmes[1] = true;
      this.gameService.playSoundStageClear();

    } else {
      if(this.try === 0 ) {
        console.log('PERDU');
        this.win = false;
        this.wrong = true;
        this.gameService.playSoundBowserFalls();
        setTimeout(() => {
          this.startGame();
        }, 2000);
      } else {
        this.win = false;
        this.wrong = true;
        this.gameService.playSoundBowserFalls();
        setTimeout(() => {
          this.win = false;
          this.wrong = false;
          this.try--;
        }, 2000);
        console.log('RECOMMENCE');
      }
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  get showEnigmeStars() {
    return this.gameService.enigmes[0] && !this.gameService.enigmes[1];
  }

  takeKeyHobbit() {
    this.gameService.score += 20;
    this.gameService.keyHobbit = true;
    this.gameService.playSoundCoin();
  }

  get keyHobbit() {
    return this.gameService.keyHobbit;
  }

  get foundEnigme(){
    return this.gameService.enigmes[1];
  }
}
