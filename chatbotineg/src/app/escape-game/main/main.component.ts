import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showChatbot = false;

  changeToggleChatbot(show: boolean) {
    this.showChatbot = show;
  }
}
