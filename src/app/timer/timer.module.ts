import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MdButtonModule, MdInputModule, MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TimerComponent } from './timer.component';
import { TimerPipe } from './timer.pipe';

@NgModule({
    declarations: [
        TimerComponent,
        TimerPipe
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule
    ],
    exports: [
        TimerComponent
    ]
})
export class TimerModule { }
