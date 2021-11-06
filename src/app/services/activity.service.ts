import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/Activity';

@Injectable()
export class ActivityService
{
  constructor(private httpClient: HttpClient)
  { }

  getAllActivities(): Observable<Array<Activity>>
  {
    return this.httpClient.get<Array<Activity>>("assets/Activities.json");
  }
}