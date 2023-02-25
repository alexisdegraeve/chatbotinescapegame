import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme2',
  templateUrl: './enigme2.component.html',
  styleUrls: ['./enigme2.component.scss']
})
export class Enigme2Component implements OnInit {
  max_x= 10;
  max_y = 10;
  nbX = 0;
  nbY = 0;
  try = 8;
  showBubbble = true;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 1;
  }

  ngOnInit(): void {
    this.showBubbble = true;
    this.startGame();
  }

  startGame() {
    this.try = 8;
    this.nbX = this.getRandomInt(this.max_x);
    this.nbY = this.getRandomInt(this.max_y);
    console.log(this.nbX);
    console.log(this.nbY);
  }

  checkFace(i:number, j:number) {
    if ((i == this.nbX) && (j === this.nbY)) {
      console.log('GAGNE');
      this.showBubbble = false;
      this.gameService.enigmes[1] = true;
    } else {
      if(this.try === 0 ) {
        console.log('PERDU');
        this.startGame();
      } else {
        console.log('RECOMMENCE');
        this.try--;
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
    this.gameService.keyHobbit = true;
  }

  get keyHobbit() {
    return this.gameService.keyHobbit;
  }

  get foundEnigme(){
    return this.gameService.enigmes[1];
  }
}
