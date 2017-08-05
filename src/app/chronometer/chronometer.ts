import { ChronometerState } from './chronometer-state';

export class Chronometer
{
  private totalSecondes: number = 0;
  private timer;

  minutes: number = 0;
  secondes: number = 0;
  state: ChronometerState = ChronometerState.Init;

  play() {
    this.state = ChronometerState.Play;
    this.timer = setInterval(() => {
      this.minutes = Math.floor(++this.totalSecondes / 60);
      this.secondes = this.totalSecondes - this.minutes * 60;
    }, 1000);
  }

  stop() {
    this.state = ChronometerState.Stop;
    clearInterval(this.timer);
  }

  init() {
    this.state = ChronometerState.Init;
    this.totalSecondes = this.minutes = this.secondes = 0;
    clearInterval(this.timer);
  }

}