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

  playAudio() {
    this.resetAnimateBox();
    let nb = this.getRandomInt(4) + 1;
    let audio = new Audio();
    console.log(nb);
    audio.src = `/assets/sound/simonSound${nb}.mp3`;
    audio.load();
    audio.play();

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

    // setTimeout(() => {
    //   audio.src = "/assets/sound/simonSound2.mp3";
    //   audio.load();
    //   audio.play();
    // }, 1500);
  }

  resetAnimateBox() {
    this.animateBox1 = false;
    this.animateBox2 = false;
    this.animateBox3 = false;
    this.animateBox4 = false;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
