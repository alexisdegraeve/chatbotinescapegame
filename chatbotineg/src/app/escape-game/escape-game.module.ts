import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './game/info/info.component';
import { TimerComponent } from './game/timer/timer.component';
import { Room1Component } from './game/room1/room1.component';
import { Enigme1Component } from './game/room1/enigme1/enigme1.component';
import { SimonComponent } from './game/room1/enigme1/simon/simon.component';
import { Enigme2Component } from './game/room1/enigme2/enigme2.component';
import { Enigme3Component } from './game/room1/enigme3/enigme3.component';
import { Room2Component } from './game/room2/room2.component';
import { Enigme4Component } from './game/room2/enigme4/enigme4.component';
import { Enigme5Component } from './game/room2/enigme5/enigme5.component';
import { Enigme6Component } from './game/room2/enigme6/enigme6.component';
import { GameService } from './game/game.service';



@NgModule({
  declarations: [
    WelcomeComponent,
    GameComponent,
    AboutComponent,
    InfoComponent,
    TimerComponent,
    Room1Component,
    Enigme1Component,
    SimonComponent,
    Enigme2Component,
    Enigme3Component,
    Room2Component,
    Enigme4Component,
    Enigme5Component,
    Enigme6Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatModule
  ],
  providers: [
    GameService
  ]
})
export class EscapeGameModule { }
