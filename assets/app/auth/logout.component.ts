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
    logOut(){

    }
}