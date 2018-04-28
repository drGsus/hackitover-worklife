import Template from '../models/template.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {
    api_url = 'http://localhost:3000';
    templateUrl = `${this.api_url}/api/templates`;

    constructor(
        private http: HttpClient
    ){}


    createTemplate(template: Template) : Observable<any>{
        return this.http.post(`${this.templateUrl}`, template);
    }

    getTemplates(): Observable<Template[]>{
        return this.http.get(this.templateUrl).map(res => {
            return res["data"].docs as Template[];
        })
    }

    editTemplate(template: Template){
        let editUrl = `${this.templateUrl}`;
        return this.http.put(editUrl, template);
    }

    deleteTemplate(id:string):any{
        let deleteUrl = `${this.templateUrl}/${id}`;
        return this.http.delete(deleteUrl).map(res => {
            return res;
        })
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}