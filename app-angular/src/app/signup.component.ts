import { Component, OnInit, ViewChild } from "@angular/core";
import User from "./models/user.model";
import { FormsModule } from "@angular/forms";
import { AuthServive } from "./services/auth.service";

@Component({
  selector: 'app-signup',
  template: `
    <div class="container">
        <h1>Signup Form</h1>
        <form #signupForm="ngForm">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" required [(ngModel)]="user.name" name="name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" required [(ngModel)]="user.email" name="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" [(ngModel)]="user.password" name="password">
        </div>

        <div ngbDropdown class="d-inline-block">
        <button class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle>{{chosenOption}}</button>
        <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
            <button *ngFor="let option of options" (click)="onSelect(option)" class="dropdown-item">{{option}}</button>
        </div>
        </div>

        <button type="submit" class="btn btn-success" [disabled]="!signupForm.form.valid" (click)="onSubmit()">Submit</button>
        </form>
    </div>  
    `,
    styles: [`
    button{
        cursor: pointer;
    }
    `] 
})
export class SignupComponent implements OnInit {

    constructor(private authServive:AuthServive){}

    user:User = new User();
    options=["Elegance", "Fashion"];
    chosenOption;

    onSubmit(){
        console.log(this.user);
        this.authServive.signup(this.user).subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    }

    onSelect(option){
        this.chosenOption = option;
    }

    ngOnInit(){
        this.chosenOption = this.options[0];
    }
}