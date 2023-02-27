import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme6',
  templateUrl: './enigme6.component.html',
  styleUrls: ['./enigme6.component.scss']
})
export class Enigme6Component {
  rive_droite = false;
  mario = false;
  mushroom = false;
  bowser = false;

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
  }

  traverser() {
    this.rive_droite = !this.rive_droite;
  }
  selectMario(){
    this.mario= !this.mario;
  }

  selectMushroom() {
    this.mushroom = !this.mushroom;
  }

  selectBowser(){
    this.bowser = !this.bowser;
  }

  unselectMario(){
    this.mario= false;
  }

  unselectMushroom() {
    this.mushroom = false;
  }

  unselectBowser(){
    this.bowser = false;
  }
}
