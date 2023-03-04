import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './escape-game/about/about.component';
import { GameComponent } from './escape-game/game/game.component';
import { GameoverComponent } from './escape-game/game/gameover/gameover.component';
import { Enigme1Component } from './escape-game/game/room1/enigme1/enigme1.component';
import { Enigme2Component } from './escape-game/game/room1/enigme2/enigme2.component';
import { Enigme3Component } from './escape-game/game/room1/enigme3/enigme3.component';
import { Enigme4Component } from './escape-game/game/room2/enigme4/enigme4.component';
import { Enigme5Component } from './escape-game/game/room2/enigme5/enigme5.component';
import { Enigme6Component } from './escape-game/game/room2/enigme6/enigme6.component';
import { WinComponent } from './escape-game/game/win/win.component';
import { SondageComponent } from './escape-game/sondage/sondage.component';
import { WelcomeComponent } from './escape-game/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'sondage', component: SondageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'enigme1', component: Enigme1Component },
  { path: 'enigme2', component: Enigme2Component },
  { path: 'enigme3', component: Enigme3Component },
  { path: 'enigme4', component: Enigme4Component },
  { path: 'enigme5', component: Enigme5Component },
  { path: 'enigme6', component: Enigme6Component },
  { path: 'win', component: WinComponent },
  { path: 'gameover', component: GameoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
