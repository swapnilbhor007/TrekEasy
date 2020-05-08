import { Component, OnInit } from '@angular/core';
import { TrekService } from '../treks/trek.service'
import { IActivity } from '../home/activities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activities: IActivity[];
  errorMessage: string;

  constructor(private trekService: TrekService) { }

  ngOnInit() {
    this.getActivities();
  }
  
  getActivities() {
    this.trekService.getActivities().subscribe({
      next: activities => { this.activities = activities },
      error: err => { this.errorMessage = err }
    });
  }


}
