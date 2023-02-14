import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  showChatbot = false;
  @Output() toggle = new EventEmitter();

  toggleChatbot(event: Event) {
    event.stopPropagation();
    this.showChatbot = !this.showChatbot;
    this.toggle.emit(this.showChatbot);
  }
}
