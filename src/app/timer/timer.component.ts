import { Component } from '@angular/core';
import { Timer } from './timer';
import { TimerState } from './timer-state';

@Component({
    selector: 'timer',
    templateUrl: '/timer.component.html'
})
export class TimerComponent {
    private btnPlay: string = 'Démarrer';
    private timer: Timer = new Timer();
    private timerState = TimerState;
    private timerInit;

    play() {
        this.timer.play()
        this.btnPlay = 'Continuer';
    }
    stop() {
        this.timer.stop();
    }
    init() {
        let timerInit = this.timerInit.split(':');
        this.timer.setInitSeconds(+timerInit[0]*60 + +timerInit[1]);
        this.timer.init();
        this.btnPlay = 'Démarrer';
    }
}