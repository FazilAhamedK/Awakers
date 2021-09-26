import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  constructor(private router : Router)
  { }

  isActiveNavLink(navItem : string) : boolean
  {
    console.log(this.router.url)
    return this.router.url === "/" + navItem;
  }
}