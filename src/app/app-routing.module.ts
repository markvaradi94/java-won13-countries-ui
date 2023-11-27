import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Countries2Component } from './countries2/countries2.component';

const routes: Routes = [
  { path: 'countries', component: Countries2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
