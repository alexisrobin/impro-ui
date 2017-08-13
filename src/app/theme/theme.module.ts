import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MdButtonModule, MdInputModule, MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ThemeSetListComponent } from './theme-set-list.component';
import { ThemeService } from './theme.service';

@NgModule({
    declarations: [
        ThemeSetListComponent
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
        ThemeSetListComponent
    ],
    providers: [
        ThemeService
    ]
})
export class ThemeModule { }
