import { Component, OnInit } from '@angular/core';
import { ITrek } from '../treks/trek';
import { TrekService } from '../treks/trek.service'
import { IActivity } from './activities';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private trekService: TrekService) { }

  treks: ITrek[];
  activities: IActivity[];
  errorMessage: string;

  ngOnInit() {
    this.getUpcomingTreks();
    this.getActivities();
    window.scrollTo(0, 0);
  }

  getUpcomingTreks() {
    this.trekService.getUpcomingTreks().subscribe({
      next: treks => { this.treks = treks },
      error: err => { this.errorMessage = err }
    });
  }

  getActivities() {
    this.trekService.getActivities().subscribe({
      next: activities => { this.activities = activities },
      error: err => { this.errorMessage = err }
    });
  }
}
