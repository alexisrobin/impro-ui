import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdToolbarModule } from '@angular/material';

import { NavBarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule
  ],
  exports: [
      NavBarComponent
  ]
})
export class NavBarModule { }
