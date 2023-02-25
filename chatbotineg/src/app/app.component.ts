import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showChatbot = false;

  constructor(private router: Router) {
  }

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

  stopGame() {
    console.log('STOP GAME');
    this.router.navigate(['/gameover']);
  }

}
