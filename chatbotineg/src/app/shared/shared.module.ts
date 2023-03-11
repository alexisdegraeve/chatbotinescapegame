import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InformationBarComponent } from './information-bar/information-bar.component';
import { GameService } from '../escape-game/game/game.service';
import { TimerComponent } from './timer/timer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    InformationBarComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    InformationBarComponent,
    TimerComponent,
    RouterModule
  ],
  providers: [
    GameService
  ]
})
export class SharedModule { }
