import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';



@NgModule({
  declarations: [
    MainComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatModule
  ],
  exports: [
    MainComponent
  ]
})
export class EscapeGameModule { }
