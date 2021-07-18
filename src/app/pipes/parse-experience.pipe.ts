import { Pipe, PipeTransform } from '@angular/core';

@Pipe
({
  name: 'parseExperience'
})
export class ParseExperiencePipe implements PipeTransform
{
  transform(requiredExperience : {minimumYears : number, maximumYears : number}) : string
  {
    let requiredExperienceInWords : string = "";

    if (requiredExperience.minimumYears && requiredExperience.maximumYears)
    {
      requiredExperienceInWords = `${requiredExperience.minimumYears} - ${requiredExperience.maximumYears} years`;
    }
    else if (!requiredExperience.minimumYears && requiredExperience.maximumYears)
    {
      requiredExperienceInWords = `Within ${requiredExperience.maximumYears} years`;
    }
    else if (requiredExperience.minimumYears && !requiredExperience.maximumYears)
    {
      requiredExperienceInWords = `${requiredExperience.minimumYears} years or more`;
    }
    else if (!requiredExperience.minimumYears && !requiredExperience.maximumYears)
    {
      requiredExperienceInWords = "Any number of years";
    }

    return requiredExperienceInWords;
  }
}