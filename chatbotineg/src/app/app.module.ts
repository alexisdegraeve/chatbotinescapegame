import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscapeGameModule } from './escape-game/escape-game.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EscapeGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
