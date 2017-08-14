import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ThemeSetListComponent }   from './theme-set-list.component';
import { ThemeSetComposerComponent }   from './theme-set-composer.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/theme_set', pathMatch: 'full' },
  { path: 'theme_set',  component: ThemeSetListComponent },
  { path: 'theme_set/:id', component: ThemeSetComposerComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ThemeRoutingModule {}