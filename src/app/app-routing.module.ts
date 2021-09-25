import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes : Routes =
[
  {path : "", redirectTo : "aboutUs", pathMatch : "full"},
  {path : "aboutUs", component : AboutUsComponent},
  {path : "**", redirectTo : "aboutUs", pathMatch : "full"}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }