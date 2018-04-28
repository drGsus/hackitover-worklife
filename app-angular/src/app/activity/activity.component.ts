import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import Activity from "../models/activity.model";
import { ActivityService } from "../services/activity.service";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent implements OnInit {
    activity:Activity = new Activity();

    constructor(private activityService:ActivityService){}

    ngOnInit(){
    }

    onSubmit()
    {
        console.log("ON SUBMIT");
        this.activityService.newActivity(this.activity).subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    }
}