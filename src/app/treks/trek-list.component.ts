import { Component, OnInit } from '@angular/core';
import { ITrek } from './trek';
import { TrekService } from './trek.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IActivity } from '../home/activities';
import { Level } from '../shared/level';
import { CssSelector } from '@angular/compiler';

@Component({
    templateUrl: './trek-list.component.html',
    styleUrls: ['./trek-list.component.css']
})

export class TrekListComponent implements OnInit  {
    pageTitle = 'Events';
    previewWidth: number = 255;
    previewMargin: number = 2;
    showImage: boolean = true;

    // _listFilter: string;
    // get listFilter(): string {
    //     return this._listFilter;
    // }
    // set listFilter(value: string) {
    //     this._listFilter = value;
    //     this.filteredTreks = this.listFilter ? this.performFilter(this.listFilter) : this.treks;
    // }

    filteredTreks: ITrek[];
    treks: ITrek[];
    errorMessage: string;
    activities: IActivity[];
    selectedActivity: string;
    levels : string[] = this.buildLevelsArray() ;
    maxPrice: number = 0;

    constructor(private route: ActivatedRoute, private router: Router, private trekService: TrekService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    buildLevelsArray(): string[] {
        return Object.keys(Level).filter(k => typeof Level[k as any] === "number")
    }

    ngOnInit(): void {
        let activity = this.route.snapshot.paramMap.get('activity');
        this.selectedActivity = activity;
        if (activity != null) {
            this.getFilteredTreks([activity]);
        }
        else {
            this.getTreks();
        }
        this.getActivities();
        window.scrollTo(0, 0);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Event : ' + message;
    }

    onBookNow(): void {

    }

    toggleSelectedClass(element: Element){      
        if (!element.classList.contains('selected')) {
            element.classList.add("selected");
        }
        else {
            element.classList.remove("selected");
        }
    }

    applyFilter(i: number, criteria : string): void {
        // apply filter class to activity li
        var element = document.getElementsByClassName('filter-' + criteria)[i];
        this.toggleSelectedClass(element);
       this.performFilter();
    }

    performFilter(event?){
         // get all selected activities li
         var activityOptions = document.getElementsByClassName('filter-activities selected');
         var selectedActivities: string[] = [];
 
         // Create array of selected activities
         Array.from(activityOptions).forEach(function (element) {
             selectedActivities.push(element.textContent.toLowerCase());
         });
 
         // get all selected levels li
         var levelOptions = document.getElementsByClassName('filter-levels selected');
         var selectedLevels: string[] = [];
 
         // Create array of selected levels
         Array.from(levelOptions).forEach(function (element) {
             selectedLevels.push(element.textContent.toLowerCase());
         });

         // Price
        //  //var slider = document.getElementById("priceRange");
         if(event != null){
            this.maxPrice = event.target.value;
         }
             
         // Perform filter by activity and level
         this.getFilteredTreks(selectedActivities, selectedLevels, this.maxPrice);
    }

    // performFilter(filterBy: string): ITrek[] {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.treks.filter((treks: ITrek) => treks.level.toLocaleLowerCase().indexOf(filterBy) != -1);
    // }

    getTreks() {
        this.trekService.getTreks().subscribe({
            next: treks => {
                this.treks = treks,
                    this.filteredTreks = this.treks;
            },
            error: err => this.errorMessage = err
        });
    }

    getFilteredTreks(activities?: String[], levels?: String[], maxPrice?: number) {
        this.trekService.getFilteredTreks(activities, levels, maxPrice).subscribe({
            next: treks => {
                this.treks = treks,
                    this.filteredTreks = this.treks;
            },
            error: err => this.errorMessage = err
        });
    }

    getActivities() {
        this.trekService.getActivities().subscribe({
            next: activities => { this.activities = activities },
            error: err => { this.errorMessage = err }
        });
    }

}
