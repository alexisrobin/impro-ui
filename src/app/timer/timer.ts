import { TimerState } from './timer-state';

export class Timer
{
  private initSeconds: number = 30;
  private timer;
  totalSeconds: number;
  
  state: TimerState;

  constructor(){
    this.init();
  }

  play() {
    this.state = TimerState.Play;
    this.timer = setInterval(() => {
      if(this.totalSeconds > 0) {
        --this.totalSeconds;
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
    this.totalSeconds = this.initSeconds;
    clearInterval(this.timer);
  }

  setInitSeconds(initSeconds: number) {
      this.initSeconds = initSeconds;
  }

}