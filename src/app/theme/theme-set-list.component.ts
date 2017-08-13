import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'theme-set-list',
    templateUrl: 'theme-set-list.component.html',
    styleUrls: ['theme.component.scss'],
})
export class ThemeSetListComponent {

    private sets: FirebaseListObservable<any[]>;

    constructor(private themeService: ThemeService){}

    ngOnInit(){
        this.sets = this.themeService.getSets();
    }
}