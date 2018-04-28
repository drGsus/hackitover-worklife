import { Component, OnInit } from '@angular/core';
import { TemplateService } from './services/template.service';
import Template from './models/template.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private templateService: TemplateService 
  ){}

  chosenTemplate : Template;
  templateList: Template[];

  ngOnInit(): void{
    this.templateService.getTemplates().subscribe(templates => {
      this.templateList = templates;
    })
  }

  onClick(template:Template){
    this.chosenTemplate = template;
  }

  backButtonWasClicked(){
    this.chosenTemplate = null;
  }
}
