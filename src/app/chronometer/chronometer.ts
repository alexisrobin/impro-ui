import { ChronometerState } from './chronometer-state';

export class Chronometer
{
  private totalBaseSeconds: number = 30;
  private totalSeconds: number;
  private timer;

  minutes: number;
  seconds: number;
  state: ChronometerState;

  constructor(){
    this.init();
  }

  play() {
    this.state = ChronometerState.Play;
    this.timer = setInterval(() => {
      if(this.totalSeconds > 0) {
        this.minutes = Math.floor(--this.totalSeconds / 60);
        this.seconds = this.totalSeconds - this.minutes * 60;
      } else {
        this.state = ChronometerState.End;
        clearInterval(this.timer);
      }
    }, 1000);
  }

  stop() {
    this.state = ChronometerState.Stop;
    clearInterval(this.timer);
  }

  init() {
    this.state = ChronometerState.Init;
    this.totalSeconds = this.totalBaseSeconds;
    this.minutes = Math.floor(this.totalSeconds / 60);
    this.seconds = this.totalSeconds - this.minutes * 60;
    clearInterval(this.timer);
  }

  getTime(): string {
    return (this.minutes < 10 ? "0" + this.minutes : this.minutes)
      + ' : '
      + (this.seconds < 10 ? "0" + this.seconds : this.seconds);
  }

}