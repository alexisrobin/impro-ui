import { Component } from '@angular/core';
import { TimerService } from './timer.service';
import { TimerState } from './timer-state';
import { TimerPipe } from './timer.pipe';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.scss'],
    animations: [
        trigger('buttonAnim', [
            transition(':enter', [
                style({transform: 'translateX(-100%)'}),
                animate('0.2s 100ms ease-in')
            ]),
            transition(':leave', [
                 animate('0.2s 0.1s ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class TimerComponent {
    private timerPipe: TimerPipe = new TimerPipe();
    private timerState = TimerState;
    private isInitializingTime: boolean = false;
    private time: string;

    constructor(private timer: TimerService){}

    ngOnInit(){
         this.timer.current.subscribe(seconds => {
             this.time = this.timerPipe.transform(seconds);
         })
    }

    play() {
        this.timer.play()
    }

    stop() {
        this.timer.stop();
    }

    init() {
        let timerInit = this.time.split(':');
        this.timer.setInitSeconds(+timerInit[0]*60 + +timerInit[1]);
        this.timer.init();
        this.isInitializingTime = false;
    }

    onInitTime(){
        this.stop();
        this.isInitializingTime = true;
    }

}