import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewJobsComponent } from './jobs/view-jobs/view-jobs.component';
import { JobService } from './jobs/view-jobs/view-jobs.service';
import { AddAJobComponent } from './jobs/add-a-job/add-a-job.component';
import { ParseExperiencePipe } from './pipes/parse-experience.pipe';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule
({
  declarations:
  [
    AppComponent,
    HomeComponent,
    ViewJobsComponent,
    AddAJobComponent,
    ParseExperiencePipe,
    LoginComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:
  [
    JobService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{ }