import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EventsComponent } from './events/events.component';

const routes : Routes =
[
  {path : "", redirectTo : "aboutUs", pathMatch : "full"},
  {path : "aboutUs", component : AboutUsComponent},
  {path : "activities", component : ActivitiesComponent},
  {path : "events", component : EventsComponent},
  {path : "**", redirectTo : "aboutUs", pathMatch : "full"}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }