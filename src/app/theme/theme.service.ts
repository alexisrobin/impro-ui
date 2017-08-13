import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs/Rx";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ThemeService
{ 
    constructor(private afDB: AngularFireDatabase){}

    newSet(){
        return this.afDB.database.ref("theme_sets").push().key;
    }

    getSet(key: string){
        return this.afDB.database.ref("theme_sets/" + key);
    }

    getSets() : FirebaseListObservable<any[]>{
        return this.afDB.list("theme_sets");
    }
}