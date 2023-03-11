import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  showChatbot = false;
  @Output() toggle = new EventEmitter();

  constructor(private translate: TranslateService) {

  }

  toggleChatbot(event: Event) {
    event.stopPropagation();
    this.showChatbot = !this.showChatbot;
    this.toggle.emit(this.showChatbot);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
