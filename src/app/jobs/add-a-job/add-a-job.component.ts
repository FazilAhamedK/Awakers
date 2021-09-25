import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component
({
  selector: 'app-add-a-job',
  templateUrl: './add-a-job.component.html',
  styleUrls: ['./add-a-job.component.scss']
})
export class AddAJobComponent implements OnInit
{
  addAJobForm! : FormGroup;

  constructor(private formBuilder : FormBuilder)
  { }

  ngOnInit() : void
  {
    this.addAJobForm = this.formBuilder.group
    ({
      title : ["", Validators.required],
      companyName : ["", Validators.required],
      description : [""],
      locations : ["", Validators.required],
      experienceRequired : this.formBuilder.group
      ({
        minimumYears : [""],
        maximumYears : [""]
      }),
      additionalRequirements : this.formBuilder.array([new FormControl("")])
    });
  }

  getAdditionalRequirements() : FormControl[]
  {
    return (this.addAJobForm.controls.additionalRequirements as FormArray).controls as FormControl[];
  }

  addAdditionalRequirement() : void
  {
    (this.addAJobForm.controls.additionalRequirements as FormArray).push(new FormControl(""));
  }

  removeAdditionalRequirement(index : number) : void
  {
    (this.addAJobForm.controls.additionalRequirements as FormArray).removeAt(index);
  }
}