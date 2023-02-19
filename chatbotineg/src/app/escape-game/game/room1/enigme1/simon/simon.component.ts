import { Component } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
})
export class SimonComponent {
  public animateBox1 = false;
  public animateBox2 = false;
  public animateBox3 = false;
  public animateBox4 = false;
  melody = new Array<number>();

  playGame() {
    this.initMelody();
  }

  initMelody() {
    if(this.melody.length > 10) {
       this.melody = [];
    }
    let nb = this.getRandomInt(4) + 1;
    this.melody.push(nb);

    console.log(this.melody);
    this.playAudio();
  }

  playAudio() {

    let cpt = (this.melody.length) - 1;
    let intervalId = setInterval(() => {
        this.resetAnimateBox();
        if(cpt === -1 ) {
          clearInterval(intervalId);
        } else {
          let nb = this.melody[cpt];
          this.switchAnimateBox(nb);
          let audio = new Audio();
          audio.src = `/assets/sound/simonSound${nb}.mp3`;
          audio.load();
          audio.play();
          cpt = cpt - 1;
        }

    }, 1500);
  }


  resetAnimateBox() {
    this.animateBox1 = false;
    this.animateBox2 = false;
    this.animateBox3 = false;
    this.animateBox4 = false;
  }

  switchAnimateBox(nb: number) {
    switch (nb) {
      case 1:
        this.animateBox1 = true;
        break;
      case 2:
        this.animateBox2 = true;
        break;
      case 3:
        this.animateBox3 = true;
        break;
      case 4:
        this.animateBox4 = true;
        break;
      default:
        break;
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
