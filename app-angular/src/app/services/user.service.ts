import Template from '../models/template.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import User from '../models/user.model';

@Injectable()
export class UserService {
    api_url = 'http://localhost:3000';
    userUrl = `${this.api_url}/user`;

    constructor(
        private http: HttpClient
    ){}

    getUsers(token:string): Observable<User[]>{
        return this.http.get(this.userUrl+token).map(res => {
            return res["obj"] as User[];
        })
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}