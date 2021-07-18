export class Job
{
    title! : string;
    companyName! : string;
    description? : string;
    location! : Array<string>;
    requiredExperience! : {minimumYears : number, maximumYears : number};
    otherRequirements? : Array<string>;
    postedBy! : string;
    postedOn!: Date;
}