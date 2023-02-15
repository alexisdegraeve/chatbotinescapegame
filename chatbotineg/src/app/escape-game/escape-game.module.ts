import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './game/info/info.component';
import { TimerComponent } from './game/timer/timer.component';
import { Room1Component } from './game/room1/room1.component';
import { Enigme1Component } from './game/room1/enigme1/enigme1.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    GameComponent,
    AboutComponent,
    InfoComponent,
    TimerComponent,
    Room1Component,
    Enigme1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatModule
  ]
})
export class EscapeGameModule { }
