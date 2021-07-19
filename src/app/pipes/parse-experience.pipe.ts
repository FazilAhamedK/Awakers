import { Pipe, PipeTransform } from '@angular/core';

@Pipe
({
  name: 'parseExperience'
})
export class ParseExperiencePipe implements PipeTransform
{
  transform(experienceRequired : {minimumYears : number, maximumYears : number}) : string
  {
    let experienceRequiredInWords : string = "";

    if (experienceRequired.minimumYears && experienceRequired.maximumYears)
    {
      experienceRequiredInWords = `${experienceRequired.minimumYears} - ${experienceRequired.maximumYears} years`;
    }
    else if (!experienceRequired.minimumYears && experienceRequired.maximumYears)
    {
      experienceRequiredInWords = `Within ${experienceRequired.maximumYears} years`;
    }
    else if (experienceRequired.minimumYears && !experienceRequired.maximumYears)
    {
      experienceRequiredInWords = `${experienceRequired.minimumYears} years or more`;
    }
    else if (!experienceRequired.minimumYears && !experienceRequired.maximumYears)
    {
      experienceRequiredInWords = "Any number of years";
    }

    return experienceRequiredInWords;
  }
}