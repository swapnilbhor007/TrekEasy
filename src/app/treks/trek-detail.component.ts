import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ITrek } from './trek';
import { ActivatedRoute, Router } from '@angular/router';
import { TrekService } from './trek.service';
import { ISchedule } from './schedule';
import * as $ from 'jquery';
import 'magnific-popup';
import { IReview } from './reviews';

@Component({
  templateUrl: './trek-detail.component.html',
  styleUrls: ['./trek-detail.component.css']
})
export class TrekDetailComponent implements OnInit, AfterViewInit {
  pageTitle: string = 'Details';
  trek: ITrek;
  treks: ITrek[];
  reviews: IReview[];
  tripSchedule: ISchedule;
  errorMessage: string;
  imagePath: string ='assets/img/treks/';
  @ViewChild('img') imgElement: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private trekService: TrekService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getTrek(id);
    this.getSchedule(id);
    this.getReviews(id);
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    
   // $(this.imgElement.nativeElement).magnificPopup({ type: 'image' });
    
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      }
  });

  $('.play-btn').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
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

  getReviews(id: number) {
    this.trekService.getReviews(id).subscribe({
      next: reviews => { this.reviews = reviews; },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/treks']);
  }
}
