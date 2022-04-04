import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityService } from './services/activity.service';
import { EventsComponent } from './events/events.component';

@NgModule
({
  declarations:
  [
    AppComponent,
    AboutUsComponent,
    ActivitiesComponent,
    EventsComponent
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
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{ }