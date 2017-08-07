import { Component } from '@angular/core';
import { Timer } from './timer';
import { TimerState } from './timer-state';

@Component({
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.scss']
})
export class TimerComponent {
    private timer: Timer = new Timer();
    private timerState = TimerState;
    private timerInit;
    private initializingTime: boolean = false;

    play() {
        this.timer.play()
    }

    stop() {
        this.timer.stop();
    }

    init() {
        let timerInit = this.timerInit.split(':');
        this.timer.setInitSeconds(+timerInit[0]*60 + +timerInit[1]);
        this.timer.init();
        this.initializingTime = false;
    }

    initializeTime() {
        this.initializingTime = true;
    }

}