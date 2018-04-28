import { Component, ViewChild } from "@angular/core";
import User from "./models/user.model";
import { FormsModule } from "@angular/forms";
import { AuthServive } from "./services/auth.service";
import { TemplateService } from "./services/template.service";
import Template from "./models/template.model";

@Component({
  selector: 'app-signin',
  template: `
    <div *ngIf="!isLoggedIn()" class="container">
        <h1>Signin</h1>
        <form #signinForm="ngForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" required [(ngModel)]="user.email" name="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" [(ngModel)]="user.password" name="password">
        </div>
        <button type="submit" class="btn btn-success" [disabled]="!signinForm.form.valid">Submit</button>

        </form>        
    </div>  
    <button class="btn btn-success" [hidden]="!isLoggedIn()" (click)="logout()">Logout</button>
    `,
    styles: [``] 
})
export class SignInComponent {

    constructor(private authServive:AuthServive, private templateService:TemplateService){}

    user: User = new User();
    template: Template = new Template();

    onSubmit(){
        this.authServive.signin(this.user).subscribe(
            data => {
                localStorage.setItem("token", data['token']);
                localStorage.setItem("userId", data['userId']);
                localStorage.setItem('email', data['email']);
            },
            error => console.error(error)
        );
    }

    isLoggedIn(){
        return this.authServive.isLoggedIn();
    }

    isAdmin(){
        return this.authServive.isAdmin() && this.isLoggedIn();
    }

    logout(){
        this.authServive.logout();
    }

    createElegance(){
        this.templateService.createTemplate(this.template).subscribe(data => console.log(data));;
    }
}