import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'theme',
    templateUrl: 'theme.component.html',
    styleUrls: ['theme.component.scss'],
})
export class ThemeComponent {

    constructor(private themeService: ThemeService){}

    ngOnInit(){
    }
}