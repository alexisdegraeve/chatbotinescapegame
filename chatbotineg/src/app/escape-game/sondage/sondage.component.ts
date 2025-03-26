import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sondage',
    templateUrl: './sondage.component.html',
    styleUrls: ['./sondage.component.scss'],
    standalone: false
})
export class SondageComponent {
  public urlFrench = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/forms/d/e/1FAIpQLScjHO6hu1QHxgqyaVgoAdPmYfID6J1rTeRE0dAJ-CFdJLAOXA/viewform?usp=pp_url');
  public urlEnglish = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/forms/d/1NiMRWTqF29Cx8lWlubbXGy6JhvRJFDHmR4frKC8Lfx0/prefill');

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {

  }
  get currentLang() {
    return this.translate.currentLang;
  }

}
