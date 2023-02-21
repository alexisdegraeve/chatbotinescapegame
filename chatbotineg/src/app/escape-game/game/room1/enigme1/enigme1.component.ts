import { Component } from '@angular/core';

@Component({
  selector: 'app-enigme1',
  templateUrl: './enigme1.component.html',
  styleUrls: ['./enigme1.component.scss']
})
export class Enigme1Component {
  rotateWheel = false;
  playSimon = false;

  spinWheel() {
    if(!this.playSimon) {
      this.rotateWheel =true;
      setTimeout(() => {
        this.playSimon = true;
        this.rotateWheel = false;
      }, 1000);
    }

  }

}
/* Rejouer la musique */
