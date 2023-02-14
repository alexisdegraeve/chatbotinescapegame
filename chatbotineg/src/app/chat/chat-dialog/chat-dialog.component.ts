import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],

  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', position: 'absolute'}),
          animate('0.3s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
          style({transform: 'translateX(0%)', position: 'absolute'}),
          animate('0.3s ease-in-out', style({transform: 'translateX(100%)'}))
      ])
      ]
    )
  ],
})
export class ChatDialogComponent {
  @Input() show = false;
}
