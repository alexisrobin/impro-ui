import { Component } from '@angular/core';
import { Chronometer } from './chronometer';
import { ChronometerState } from './chronometer-state';

@Component({
    selector: 'chronometer',
    templateUrl: '/chronometer.component.html'
})
export class ChronometerComponent {
    private btnPlay: string = 'Démarrer';
    private chronometer: Chronometer = new Chronometer();
    private chronometerState = ChronometerState;

    play() {
        this.chronometer.play()
        this.btnPlay = 'Continuer';
    }
    stop() {
        this.chronometer.stop();
    }
    init() {
        this.chronometer.init();
        this.btnPlay = 'Démarrer';
    }
}