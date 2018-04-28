import { Component, OnInit, ViewChild } from "@angular/core";
import User from "./models/user.model";
import { FormsModule } from "@angular/forms";
import { AuthServive } from "./services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
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