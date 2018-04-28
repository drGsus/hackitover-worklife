import { Component, ViewChild, OnInit } from "@angular/core";
import User from "./models/user.model";
import { FormsModule } from "@angular/forms";
import { AuthServive } from "./services/auth.service";
import { TemplateService } from "./services/template.service";
import Template from "./models/template.model";
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-adminpanel',
  template: `
  <h1>ADMIN</h1>
  <ul>
  <li *ngFor="let user of users">{{user.email}}</li>
  </ul>
  <button class="btn btn-success">Create User</button>

    `,
    styles: [``] 
})
export class AdminPanelComponent implements OnInit {

    constructor(private userService:UserService, private authService:AuthServive){}

    users:User[];
    template:Template = new Template();
    
    ngOnInit(){
        const token = localStorage.getItem('token') ? "?token="+localStorage.getItem('token') : "";
        this.userService.getUsers(token).subscribe(data => {
            console.log(data);
            this.users = data
        });
    }

    isAdmin(){
        this.authService.isAdmin();
    }

    isTrue(){
        console.log("JO " +  this.authService.isAdmin())
        this.authService.isAdmin();
    }
}