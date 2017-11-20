import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    selector:'app-logout',
    template:`
        <div class="col-md-8 ">
        <button class="btn btn-danger" (click)="logOut()">Logout
        </button>
        </div>
    `
})
export class LogoutComponent{
    constructor(private authService: AuthService, private router: Router) {}
    logOut(){
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}