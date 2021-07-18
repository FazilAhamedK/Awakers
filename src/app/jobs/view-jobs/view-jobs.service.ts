import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../models/Job';

@Injectable()
export class JobService
{
  constructor(private httpClient : HttpClient)
  { }

  getAllJobListings() : Observable<Array<Job>>
  {
    return this.httpClient.get<Array<Job>>("assets/JobListings.json");
  }
}