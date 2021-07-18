import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { AddAJobComponent } from './jobs/add-a-job/add-a-job.component';
import { ViewJobsComponent } from './jobs/view-jobs/view-jobs.component';
import { LoginComponent } from './login/login.component';

const routes : Routes =
[
  {path : "", redirectTo : "home", pathMatch : "full"},
  {path : "login/:redirectTo", component : LoginComponent},
  {path : "home", component : HomeComponent},
  {path : "jobs", component : ViewJobsComponent},
  {path : "jobs/add", component : AddAJobComponent, canActivate : [LoginGuard]},
  {path : "**", redirectTo : "home", pathMatch : "full"}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }