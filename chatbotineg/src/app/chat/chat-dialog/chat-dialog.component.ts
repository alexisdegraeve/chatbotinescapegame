import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Input, Output, Sanitizer, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

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
  public  urlFrench = this.sanitizer.bypassSecurityTrustResourceUrl('https://console.dialogflow.com/api-client/demo/embedded/1e88023f-dfcc-4b80-afc0-4982069fed26');
  public urlEnglish = this.sanitizer.bypassSecurityTrustResourceUrl('https://console.dialogflow.com/api-client/demo/embedded/8bfefc6f-e7c2-49e9-bd50-fd73e1e1c0eb');

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {

  }

  get currentLang() {
    return this.translate.currentLang;
  }
}
