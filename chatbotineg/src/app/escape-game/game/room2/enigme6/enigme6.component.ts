import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme6',
  templateUrl: './enigme6.component.html',
  styleUrls: ['./enigme6.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Enigme6Component implements OnInit{
  rive_droite = false;
  embarque = [true, true, true];
  debarque = [false, false, false];
  barque = 0;
  gagne = false;
  wrong = false;
  win = false;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
  }
  ngOnInit(): void {
    console.log(this.embarque);
    console.log(this.debarque);
  }

  traverser() {
    this.rive_droite = !this.rive_droite;
    console.log(this.embarque);
    console.log(this.debarque);
    this.checkGame();
  }

  selectLuigi(){
    if (this.barque > 0) return;
    if (this.rive_droite) {
      this.debarque[0] = false;
      this.barque = 1;
    } else {
      this.embarque[0] = false;
      this.barque = 1;
    }
  }

  selectMushroom() {
    if (this.barque > 0) return;
    if (this.rive_droite) {
      this.debarque[1] = false;
      this.barque = 2;
    } else {
      this.embarque[1] = false;
      this.barque = 2;
    }
  }

  selectBowser(){
    if (this.barque > 0) return;
    if (this.rive_droite) {
      this.debarque[2] = false;
      this.barque = 3;
    } else {
      this.embarque[2] = false;
      this.barque = 3;
    }
  }



  unselectLuigi(){
    if (this.rive_droite) {
      this.debarque[0] = true;
      this.barque = 0;
      this.checkGagne();
    } else {
      this.embarque[0] = true;
      this.barque = 0;
    }
  }

  unselectMushroom() {
    if (this.rive_droite) {
      this.debarque[1] = true;
      this.barque = 0;
      this.checkGagne();
    } else {
      this.embarque[1] = true;
      this.barque = 0;
    }
  }

  unselectBowser(){
    if (this.rive_droite) {
      this.debarque[2] = true;
      this.barque = 0;
      this.checkGagne();
    } else {
      this.embarque[2] = true;
      this.barque = 0;
    }
  }

  restartGame() {
    this.rive_droite = false;
    this.embarque = [true, true, true];
    this.debarque = [false, false, false];
    this.barque = 0;
    this.gagne = false;
    this.wrong = false;
    this.win = false;
  }

  get output() {
    return  this.gameService.enigmes[5];
  }


  checkGame() {
    let perdu = false;
    if(this.embarque[0] && this.embarque[1]) {
      perdu = true;
    }
    if(this.embarque[0] && this.embarque[2]) {
      perdu = true;
    }
    if(this.debarque[0] && this.debarque[1]) {
      perdu = true;
    }
    if(this.debarque[0] && this.debarque[2]) {
      perdu = true;
    }
    console.log('PERDU ' +  perdu);
    if(perdu) {
      this.wrong = true;
      setTimeout(() => {
        this.wrong = false;
        this.restartGame();
      }, 2000);
    }
  }

  checkGagne() {
    if(this.debarque[0] && this.debarque[1] && this.debarque[2])
    {
      this.gagne = true;
      this.gameService.enigmes[5] = true;
      if(this.gameService.enigmes[5]) {
        this.gameService.score += 360;
        this.win = true;
      }
    }
  }
}
