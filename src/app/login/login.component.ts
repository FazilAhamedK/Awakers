import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  signInError : any;

  constructor(private ngZone : NgZone, private router : Router, private activatedRoute : ActivatedRoute)
  { }

  async ngOnInit() : Promise<void>
  {
    await gapi.load("auth2", () =>
    {
      gapi.auth2.init
                ({
                  client_id: environment.gapiClientID,
                  scope: "profile email"
                })
                .then(async auth2 =>
                {
                  if (auth2.isSignedIn.get())
                  {
                    sessionStorage.setItem("Awakers.User", JSON.stringify(User.toUser(auth2.currentUser.get().getBasicProfile())));
                    this.activatedRoute.params.subscribe(params => this.router.navigateByUrl(params["redirectTo"]));
                  }
                });
    });

    await gapi.load("signin2", () =>
    {
      gapi.signin2.render("signInButton",
      {
        scope: "profile email",
        longtitle: true,
        theme: "dark",
        onsuccess: (user) => this.ngZone.run(() => this.signIn(user)),
        onfailure: (error) =>
        {
          sessionStorage.clear();
          this.signInError = error;
        }
      });
    });
  }

  signIn(user : gapi.auth2.GoogleUser) : void
  {
    this.signInError = null;
    console.log("LoggedIn User", User.toUser(user.getBasicProfile()))
    sessionStorage.setItem("Awakers.User", JSON.stringify(User.toUser(user.getBasicProfile())));
    this.activatedRoute.params.subscribe(params => this.router.navigateByUrl(params["redirectTo"]));
  }
}