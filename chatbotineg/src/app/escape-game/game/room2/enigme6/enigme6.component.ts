import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-enigme6',
  templateUrl: './enigme6.component.html',
  styleUrls: ['./enigme6.component.scss']
})
export class Enigme6Component implements OnInit{
  rive_droite = false;
  mario = true;
  mushroom = false;
  bowser = false;
  maxbarque = 2;
  barques = [0];

  constructor(private gameService: GameService) {
    this.gameService.showInformationBar = true;
    this.gameService.roomNumber = 2;
    this.barques.length = 2;
  }
  ngOnInit(): void {

  }

  traverser() {
    this.rive_droite = !this.rive_droite;
    console.log(this.barques);
  }
  selectMario(){
    if(this.barques.length <= this.maxbarque) {
      this.mario= !this.mario;
      this.barques.push(0);
    }
  }

  selectMushroom() {
    if(this.barques.length <= this.maxbarque) {
      this.mushroom = !this.mushroom;
      this.barques.push(1);
    }
  }

  selectBowser(){
    if(this.barques.length <= this.maxbarque) {
      this.bowser = !this.bowser;
      this.barques.push(2);
    }
  }

  unselectMario(){
    this.mario= false;
    this.removeBarques(0);
  }

  unselectMushroom() {
    this.mushroom = false;
    this.removeBarques(1);
  }

  unselectBowser(){
    this.bowser = false;
    this.removeBarques(2);
  }

  removeBarques(searchIndex: number) {
    const index = this.barques.indexOf(searchIndex);
    if (index > -1) {
      this.barques.splice(index, 1);
    }
  }
}
