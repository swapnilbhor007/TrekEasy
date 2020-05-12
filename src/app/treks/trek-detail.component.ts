import { Component, OnInit } from '@angular/core';
import { ITrek } from './trek';
import { ActivatedRoute, Router } from '@angular/router';
import { TrekService } from './trek.service';
import { ISchedule } from './schedule';

@Component({
  templateUrl: './trek-detail.component.html',
  styleUrls: ['./trek-detail.component.css']
})
export class TrekDetailComponent implements OnInit {
  pageTitle: string = 'Details';
  trek: ITrek;
  treks: ITrek[];
  tripSchedule: ISchedule;
  errorMessage: string;


  constructor(private route: ActivatedRoute, private router: Router, private trekService: TrekService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getTrek(id);
    this.getSchedule(id);
    window.scrollTo(0, 0);
  }

  getTrek(id: number) {
    this.trekService.getTrekDetails(id).subscribe({
      next:  trek => {this.trek = trek; this.getRelatedEvents(trek.id,trek.activities)},
      error: err => this.errorMessage = err
    });
  }

  getRelatedEvents(id: number, activities: String[]) {
    this.trekService.getRelatedTreks(id, activities).subscribe({
      next: treks => this.treks = treks,
      error: err => this.errorMessage = err
    })
  }

  getSchedule(id: number) {
    this.trekService.getScheduleDetails(id).subscribe({
      next: schedule => { this.tripSchedule = schedule; },
      error: err => this.errorMessage = err
    });
  }
  onBack(): void {
    this.router.navigate(['/treks']);
  }
}
