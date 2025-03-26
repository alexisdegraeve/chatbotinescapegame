import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/escape-game/game/game.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    standalone: false
})
export class TimerComponent implements OnInit, OnDestroy {

  maxmin = 30;
  hour = 0;
  min = 0;
  sec = 0;
  currentDate = new Date();
  id: any;


  constructor (private gameService: GameService, private router:Router) {
  }

  ngOnInit() {
    console.log('ng on init elapse');
    this.resetDateTime();
    console.log(this.gameService.startTimer);
    this.id = setInterval(() => {
      if(this.gameService.startTimer) {
        if((this.currentDate.getMinutes() == 0) && this.currentDate.getSeconds() ==0) {
          this.stopTimer();
        }else {
          this.refreshTime();
        }
      }
    }, 1000);
  }

  refreshTime() {
    this.currentDate.setMilliseconds(this.currentDate.getMilliseconds() - 1000);
    this.hour = this.currentDate.getHours();
    this.min = this.currentDate.getMinutes();
    this.sec = this.currentDate.getSeconds();
  }

  resetDateTime() {
    this.currentDate = new Date();
    this.currentDate.setHours(0);
    this.currentDate.setMinutes(this.maxmin);
    this.currentDate.setMilliseconds(0);
    this.currentDate.setSeconds(0);
  }

  stopTimer () {
    if (this.id) {
      clearInterval(this.id);
      this.resetDateTime();
      this.gameService.startTimer = false;
      this.router.navigate(['/gameover']);

    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  get starttimer() {
    return this.gameService.startTimer;
  }
}
