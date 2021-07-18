import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from './models/User';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  constructor(public router : Router, private ngZone : NgZone)
  { }

  async signOut() : Promise<void>
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
                  gapi.auth2.getAuthInstance().signOut()
                                              .then(() => this.ngZone.run(() =>
                                                      {
                                                        sessionStorage.clear();
                                                        this.router.navigateByUrl("home");
                                                      })
                                                    );
                });
    });
  }

  isUserLoggedIn() : boolean
  {
    return sessionStorage.getItem("Awakers.User") != null;
  }

  getLoggedInUser() : User | undefined
  {
    let loggedInUser = sessionStorage.getItem("Awakers.User");
    
    return loggedInUser ? JSON.parse(loggedInUser) as User : undefined; 
  }
}