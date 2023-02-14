import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showChatbot = false;

  changeToggleChatbot(show: boolean) {
    this.showChatbot = show;
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: Event) {
    if(this.showChatbot) {
      console.log('click outside');
      console.log(this.showChatbot);
      this.showChatbot = false;
    }
  }

}
