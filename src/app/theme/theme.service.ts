import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs/Rx";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { ThemeSet } from './theme-set'

@Injectable()
export class ThemeService
{ 
    constructor(private afDB: AngularFireDatabase){}

    getSet($key: string): FirebaseObjectObservable<ThemeSet> {
        console.log($key);
        return this.afDB.object("theme_sets/" + $key);
    }

    getSets() : FirebaseListObservable<ThemeSet[]>{
        return this.afDB.list("theme_sets");
    }

    addTheme($key: string, theme: string) {
        this.afDB.list("theme_sets/" + $key + "/themes").push(theme);
    }

    getThemes($key: string) : FirebaseListObservable<any[]> {
        return this.afDB.list("theme_sets/" + $key + "/themes");
    }
}