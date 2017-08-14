import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MdButtonModule, MdInputModule, MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ThemeSetListComponent } from './theme-set-list.component';
import { ThemeSetComposerComponent } from './theme-set-composer.component';
import { ThemeComponent } from './theme.component';
import { ThemeService } from './theme.service';

import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
    declarations: [
        ThemeSetListComponent,
        ThemeSetComposerComponent,
        ThemeComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule,
        ThemeRoutingModule
    ],
    exports: [
        ThemeComponent
    ],
    providers: [
        ThemeService
    ]
})
export class ThemeModule { }
