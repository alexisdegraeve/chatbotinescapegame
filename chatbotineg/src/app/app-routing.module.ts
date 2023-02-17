import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './escape-game/about/about.component';
import { GameComponent } from './escape-game/game/game.component';
import { Enigme1Component } from './escape-game/game/room1/enigme1/enigme1.component';
import { WelcomeComponent } from './escape-game/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'about', component: AboutComponent },
  { path: 'enigme1', component: Enigme1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
