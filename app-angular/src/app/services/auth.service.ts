import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import User from '../models/user.model';

@Injectable()
export class AuthServive {
    api_url = 'http://localhost:3000';
    userUrl = `${this.api_url}/user`;
    adminEmail = 'sergiotorcanin@gmail.com'

    constructor(
        private http: HttpClient 
    ){}

    signup(user: User) : Observable<any>{
        console.log(user);
        return this.http.post(`${this.userUrl}`, user);
    }

    signin(user:User){
        return this.http.post(`${this.userUrl}/signin`, user);
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    isAdmin(){
        if (this.isLoggedIn()){
            if (localStorage.getItem('email') == this.adminEmail){
                return true;
            }
        }
        return false;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}