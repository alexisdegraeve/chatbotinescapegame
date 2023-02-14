import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input()show = false;
  @Output() closeInfoEvent = new EventEmitter();

  startGame() {
    this.closeInfoEvent.emit(true);
  }
}
