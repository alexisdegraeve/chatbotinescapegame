import { Component, HostListener } from '@angular/core';

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

  @HostListener('document:click', ['$event']) onDocumentClick(event: Event) {
    console.log('click outside');
    if(this.showChatbot) {
      console.log(this.showChatbot);
      this.showChatbot = false;
    }
  }

  hideChatbot(hide: boolean) {
    this.showChatbot = hide;
  }
}
