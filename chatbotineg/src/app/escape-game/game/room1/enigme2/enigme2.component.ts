import { Component } from '@angular/core';

@Component({
  selector: 'app-enigme2',
  templateUrl: './enigme2.component.html',
  styleUrls: ['./enigme2.component.scss']
})
export class Enigme2Component {

  nbX = 0;
  nbY = 0;
  try = 8;

  startGame() {
    this.try = 8;
    this.nbX = this.getRandomInt(25);
    this.nbY = this.getRandomInt(15);
    console.log(this.nbX);
    console.log(this.nbY);
  }

  checkFace(i:number, j:number) {
    if ((i == this.nbX) && (j === this.nbY)) {
      console.log('GAGNE');
      this.startGame();
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
}
