import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import Activity from '../models/activity.model';

@Injectable()
export class ActivityService {
    api_url = 'http://localhost:3000';
    activity_url = `${this.api_url}/activity`;

    constructor(
        private http: HttpClient 
    ){}

    getActivities() : Observable<any>{
        return this.http.get(this.activity_url).map(res => {
            console.log("Activity Service");
            console.log(res);
            return res["obj"] as Activity[];
        })
    }

    newActivity(activity:Activity) : Observable<any>{
        return this.http.post(`${this.activity_url}`, activity);
    }
}