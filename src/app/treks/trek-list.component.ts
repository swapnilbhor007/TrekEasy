import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ITrek } from './trek';
import { TrekService } from './trek.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IActivity } from '../home/activities';
import { Level } from '../shared/level';

@Component({
    templateUrl: './trek-list.component.html'
})

export class TrekListComponent implements OnInit, AfterViewInit  {
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
    levels = Level;

    constructor(private route: ActivatedRoute, private router: Router, private trekService: TrekService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
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

    ngAfterViewInit():void{
    
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
        
        // Perform filter
        this.getFilteredTreks(selectedActivities, selectedLevels);
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

    getFilteredTreks(activities?: String[], levels?: String[]) {
        this.trekService.getFilteredTreks(activities, levels).subscribe({
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
