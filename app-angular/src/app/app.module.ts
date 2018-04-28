import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateService } from './services/template.service';
import { TemplateViewComponent } from './templateView.component';
import { SignupComponent } from './signup.component';
import { AuthServive } from './services/auth.service';
import { SignInComponent } from './signin.component';
import { Router } from '@angular/router'; 
import { UserService } from './services/user.service';
import { AdminPanelComponent } from './admin.panel';
import { ActivityComponent } from './activity/activity.component';
import { ActivityService } from './services/activity.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateViewComponent,
    SignupComponent,
    SignInComponent,
    AdminPanelComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  providers: [
    TemplateService,
    AuthServive,
    UserService,
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }