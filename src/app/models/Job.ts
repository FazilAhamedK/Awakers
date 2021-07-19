export class Job
{
    title! : string;
    companyName! : string;
    description? : string;
    locations! : Array<string>;
    experienceRequired! : {minimumYears : number, maximumYears : number};
    otherRequirements? : Array<string>;
    postedBy! : string;
    postedOn!: Date;
}