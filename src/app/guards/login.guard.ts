import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/User';

@Injectable()
export class LoginGuard implements CanActivate
{
  constructor(private router : Router)
  { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Promise<boolean>
  {
    let redirectRoute : string = state.url ? state.url : "";

    return sessionStorage.getItem("Awakers.User") ? true : this.router.navigate(["login", redirectRoute]);
  }
}