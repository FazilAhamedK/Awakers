import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Job } from '../../models/Job';
import { JobService } from './view-jobs.service';

@Component
({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit
{
  jobListings : Array<Job> = [];
  errorMessage? : string;

  constructor(private jobService : JobService, private title : Title)
  {
    this.title.setTitle("Job Listings | Awakers")
  }

  ngOnInit() : void
  {
    this.jobService.getAllJobListings().subscribe(response => this.jobListings = response);
  }
}