import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  showChatbot = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
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
  }

}
