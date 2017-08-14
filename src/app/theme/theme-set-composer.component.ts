import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ThemeService } from './theme.service';
import { ThemeSet } from './theme-set'

import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'theme-set-composer',
    templateUrl: 'theme-set-composer.component.html',
    styleUrls: ['theme.component.scss'],
})
export class ThemeSetComposerComponent {

    @ViewChild("themeInput")
    private themeInput: ElementRef;

    private set: FirebaseObjectObservable<ThemeSet>;
    private themes: FirebaseListObservable<any[]>

    constructor(private themeService: ThemeService,
                private route: ActivatedRoute){}

    ngOnInit(){
         this.route.paramMap
            .map((params: ParamMap) => (params.get('id')))
            .subscribe((key) =>{
                this.set = this.themeService.getSet(key);
                this.themes = this.themeService.getThemes(key);
            });
    }

    addTheme(){
        this.themeService.addTheme(this.set.$ref.key, this.themeInput.nativeElement.value);
        this.themeInput.nativeElement.value = "";
    }
}