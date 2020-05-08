import { Component, OnInit } from '@angular/core';
import { ITrek } from './trek';
import { TrekService } from './trek.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './trek-list.component.html'
})

export class TrekListComponent implements OnInit {
    pageTitle = 'Events';
    previewWidth: number = 255;
    previewMargin: number = 2;
    showImage: boolean = true;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredTreks = this.listFilter ? this.performFilter(this.listFilter) : this.treks;
    }
    filteredTreks: ITrek[];
    treks: ITrek[];
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private trekService: TrekService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
    }

    ngOnInit(): void {
        let activity = this.route.snapshot.paramMap.get('activity');
        if (activity != null) {
            this.getFilteredTreks([activity]);
        }
        else {
            this.getTreks();
        }
        window.scrollTo(0, 0);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Event : ' + message;
    }

    onBookNow(): void {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): ITrek[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.treks.filter((treks: ITrek) => treks.level.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

    getTreks() {
        this.trekService.getTreks().subscribe({
            next: treks => {
                this.treks = treks,
                    this.filteredTreks = this.treks;
            },
            error: err => this.errorMessage = err
        });
    }

    getFilteredTreks(activities: String[]) {
        this.trekService.getFilteredTreks(activities).subscribe({
            next: treks => {
                this.treks = treks,
                    this.filteredTreks = this.treks;
            },
            error: err => this.errorMessage = err
        });
    }
}
