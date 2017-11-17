import { RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
           <nav class="col-md-8 col-md-offset-2">
           <ul class="nav nav-tabs">
               <li RouterLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
               <li RouterLinkActive="active"><a [routerLink]="['signin']">Signin</a></li>
               <li RouterLinkActive="active"><a [routerLink]="['logout']">Logout</a></li>
           </ul>
           </nav>
        </header>
        <div class="row spacing">
        <router-outlet></router-outlet>
        </div>
    `
})

export class AuthenticationComponent {
    constructor() { }


}