import { Injectable } from '@angular/core';

import { TimerState } from './timer-state';
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class TimerService
{
  private timer;
  initSeconds: number = 30;
  current: BehaviorSubject<number> = new BehaviorSubject(this.initSeconds);
  
  state: TimerState;

  constructor(){
    this.init();
  }

  play() {
    this.state = TimerState.Play;
    this.timer = setInterval(() => {
      if( this.current.value > 0) {
        this.current.next(this.current.value - 1);
      } else {
        this.state = TimerState.End;
        clearInterval(this.timer);
      }
    }, 1000);
  }

  stop() {
    this.state = TimerState.Stop;
    clearInterval(this.timer);
  }

  init() {
    this.state = TimerState.Init;
    this.current.next(this.initSeconds);
    clearInterval(this.timer);
  }

  setInitSeconds(initSeconds: number) {
      this.initSeconds = initSeconds;
  }
}