export class User
{
    name! : string;
    email!: string;
    imageURL! : string;

    static toUser(googleUserProfile : gapi.auth2.BasicProfile) : User
    {
        let user : User = new User();

        user.name = googleUserProfile.getName();
        user.email = googleUserProfile.getEmail();
        user.imageURL = googleUserProfile.getImageUrl();

        return user;
    }
}