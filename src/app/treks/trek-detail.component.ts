import { Component, OnInit } from '@angular/core';
import { ITrek } from './trek';
import { ActivatedRoute, Router } from '@angular/router';
import { TrekService } from './trek.service';

@Component({
  templateUrl: './trek-detail.component.html'
})
export class TrekDetailComponent implements OnInit {
  pageTitle: string = 'Details';
  trek: ITrek;
  treks: ITrek[];
  errorMessage: string;
  eventId: number;

  constructor(private route: ActivatedRoute, private router: Router, private trekService: TrekService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.eventId = id;
    this.getTrek(id);
    this.getRelatedEvents(["Trekking","Camping"]);
    window.scrollTo(0, 0);
  }

  getTrek(id: number) {
    this.trekService.getTrekDetails(id).subscribe({
      next: trek => this.trek = trek,
      error: err => this.errorMessage = err
    });
  }

  getRelatedEvents(activities: String[]) {
    this.trekService.getFilteredTreks(activities).subscribe({
      next: treks => this.treks = treks,
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/treks']);
  }
}
