import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  maxmin = 20;
  hour = 0;
  min = 0;
  sec = 0;
  clockstart = true;
  currentDate = new Date();
  id: any;

  ngOnInit() {
    this.resetDateTime();
    this.id = setInterval(() => {
      if((this.currentDate.getMinutes() == 0) && this.currentDate.getSeconds() ==0) {
        this.stopTimer();
      }else {
        this.refreshTime();
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
    }
  }
}
