import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { TimerComponent } from './timer.component';
import { TimerPipe } from './timer.pipe';

@NgModule({
    declarations: [
        TimerComponent,
        TimerPipe
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        TimerComponent
    ]
})
export class TimerModule { }
