import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivityService } from '../services/activity.service';

@Component
({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit
{
  activities: Array<Activity> = [];

  constructor(private activityService: ActivityService)
  { }

  ngOnInit(): void
  {
    this.activityService.getAllActivities()
                        .subscribe
                        (
                          response => this.activities = response,
                          error => this.activities = []
                        );
  }
}