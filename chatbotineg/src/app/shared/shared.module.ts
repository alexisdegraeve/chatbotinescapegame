import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InformationBarComponent } from './information-bar/information-bar.component';
import { GameService } from '../escape-game/game/game.service';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    InformationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    InformationBarComponent,
    RouterModule
  ],
  providers: [
    GameService
  ]
})
export class SharedModule { }
