import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WelcomeComponent,
    GameComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatModule
  ]
})
export class EscapeGameModule { }
