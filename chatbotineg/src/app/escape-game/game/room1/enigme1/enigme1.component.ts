import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enigme1',
  templateUrl: './enigme1.component.html',
  styleUrls: ['./enigme1.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class Enigme1Component {
  showSimon = false;
  mountain = true;

  moveMountain() {
    this.mountain = false;
    this.showSimon = true;
  }

}
/* Rejouer la musique */
