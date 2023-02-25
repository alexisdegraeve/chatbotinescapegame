import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { GameService } from '../../../game.service';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-10%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-10%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class SimonComponent {
  @Input()showSimon = false;
  public animateBox1 = false;
  public animateBox2 = false;
  public animateBox3 = false;
  public animateBox4 = false;
  melody = new Array<number>();
  melodyPlayer = new Array<number>();
  canPlay = true;
  currentNote = 0;
  start = false;
  intervalId:any;
  wrong = false;

  constructor(private gameService: GameService) {
  }

  playGame() {
    this.start = true;
    this.canPlay = true;
    this.currentNote = 0;
    this.melody = [];
    this.melodyPlayer = [];
    this.fillMelody();
    this.playAudio();
  }

  stopGame() {
    this.start = false;
  }

  fillMelody() {
    this.melody = [];
    for (let index = 0; index < 4; index++) {
      let nb = this.getRandomInt(4) + 1;
      this.melody.push(nb);
    }
  }

  playAudio() {
    this.canPlay = false;
    let cpt = 0;
    this.intervalId = setInterval(() => {
        this.resetAnimateBox();
        if(cpt === this.melody.length) {
          this.canPlay = true;
          clearInterval(this.intervalId);
        } else {
          let nb = this.melody[cpt];
          this.switchAnimateBox(nb);
          let audio = new Audio();
          audio.src = `/assets/sound/simonSound${nb}.mp3`;
          audio.load();
          audio.play();
          cpt = cpt + 1;
        }

    }, 1000);
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

  playCase(num: number) {
      this.resetAnimateBox();
      this.switchAnimateBox(num);
      let audio = new Audio();
      audio.src = `/assets/sound/simonSound${num}.mp3`;
      audio.load();
      audio.play();
      this.melodyPlayer.push(num);

      if(this.checkNoteOk()) {
        this.currentNote++;
        if(this.melody.length === this.melodyPlayer.length) {
          /* GAGNE */
          this.gameService.enigmes[0] = true;
          this.gameService.showSimon = false;
        }

      } else {
          // Perdu on recommence
          console.log('PERDU');
         this.wrong = true;
          setTimeout(() => {
            clearInterval(this.intervalId);
            this.wrong = false;
            this.playGame();
          }, 2000);
     }
  }

  checkNoteOk() {
    return this.melodyPlayer[this.currentNote]  === this.melody[this.currentNote];
  }
}
