import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from "@angular/core";
import Template from "./models/template.model";
import { Elegance } from "../elegance";
import { Http } from "@angular/http";
import { TemplateService } from "./services/template.service";

function dude() : any{
    return document.getElementById("#FileFrame"); 
    //return document.getElementById("FileFrame");
}
@Component({
    selector: "app-templateView",
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <button type="submit" class="btn btn-primary" (click)="backButton()">Back</button>
                <input type="text" name="type" id="type" [(ngModel)]="template.type" placeholder="Type" class="form-control">
                <input type="text" name="logoURL" id="logoURL" [(ngModel)]="template.logoURL" placeholder="LogoURL" class="form-control">
                <button type="submit" class="btn btn-primary" (click)="updateButton()">Update</button>
                <button type="submit" class="btn btn-primary" (click)="createButton()">Create</button>
            </div> 
        </div>
    </div>   
    <iframe #FileFrame id="FileFrame" class="preview-frame" ></iframe>`,
    styles: [`#FileFrame{
        width:100%;
        height: 900px;
    }`]
})
export class TemplateViewComponent implements OnInit, AfterViewInit{
    @ViewChild("FileFrame") fileFrame : ElementRef;
    templates : Template[] = [];
    @Input()
    template : Template = new Template();
    html : string = "";

    @Output() backButtonClicked = new EventEmitter(); 

    constructor(private http:Http, private templateService:TemplateService){}

    ngOnInit(){
    }

    ngAfterViewInit(){
        this.updateHTML();
        this.updateIFrame();
    }

    updateButton(){
        this.template.navigation = {navigation1: [], navigation2: []};
        this.template.navigation.navigation1.push({link: "Dude", title: "Dude"});
        this.template.navigation.navigation2.push({link: "Dude", title: "Dude"});
        this.templateService.editTemplate(this.template).subscribe((data) => 
        {
            console.log(data);
            this.updateView();
        });
    }

    backButton(){
        this.backButtonClicked.emit();
    }

    createButton(){
        this.templateService.createTemplate(this.template).subscribe(data => console.log(data));
    }

    updateView(){
        this.updateHTML();
        this.updateIFrame();
    }

    updateIFrame(){
        var doc = this.fileFrame.nativeElement.contentWindow.document;
        doc.open();
        doc.write(this.html);
        doc.close();
    }

    updateHTML(){
        this.html = Elegance.getHTML2(this.template);
    }
}