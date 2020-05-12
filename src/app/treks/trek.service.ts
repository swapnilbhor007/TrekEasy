import { Injectable } from '@angular/core';
import { ITrek } from './trek';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'
import { ISchedule } from './schedule';
import { IActivity } from '../home/activities';

@Injectable({
    providedIn: 'root'
})

export class TrekService {

    constructor(private httpClient: HttpClient) { }

    private eventsUrl = 'assets/data/events.json';
    private schedulesUrl = 'assets/data/schedules.json';
    private activitiesUrl = 'assets/data/activities.json';
    // private eventsUrl = 'http://localhost:4000/treks';
    // private schedulesUrl = 'http://localhost:4000/schedules';
    // private activitiesUrl = 'http://localhost:4000/activities';

    getTreks(): Observable<ITrek[]> {
        return this.httpClient.get<ITrek[]>(this.eventsUrl).pipe(
            //tap(data => console.log('Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getTrekDetails(id: number): Observable<ITrek> {
        return this.getTreks().pipe(
            map((treks: ITrek[]) => treks.find(t => t.id === id)),
            // tap(data => console.log('Trek:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getUpcomingTreks(): Observable<ITrek[]> {
        return this.httpClient.get<ITrek[]>(this.eventsUrl).pipe(
            map((treks: ITrek[]) => treks.filter(t => new Date(t.eventDate) > new Date())),
            // tap(data => console.log('Upcoming Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getFilteredTreks(activities?: String[], levels?: String[], maxPrice?: number): Observable<ITrek[]> {
        //   console.log('level : ' + levels.toString());
        //   console.log('activities : ' + activities.toString());
        //console.log('price :' + maxPrice);
        
        return this.httpClient.get<ITrek[]>(this.eventsUrl).pipe(
            map((treks: ITrek[]) => treks.filter(t => ((activities && activities.length > 0 
                ? t.activities && t.activities.some(o => activities && activities.includes(o)) : true)
                && (levels && levels.length > 0 ? levels.toString().includes(t.level) : true)
                && (maxPrice && maxPrice > 0 ? t.price <= maxPrice : true)))),
            // tap(data => console.log('Filtered Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getRelatedTreks(id: number, activities?: String[]): Observable<ITrek[]> {
        return this.httpClient.get<ITrek[]>(this.eventsUrl).pipe(
            map((treks: ITrek[]) => treks.filter(t => (t.id != id)
                && t.activities && t.activities.some(o => activities && activities.includes(o)))),
            // tap(data => console.log('Related Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getScheduleDetails(id: number): Observable<ISchedule> {
        return this.httpClient.get<ISchedule[]>(this.schedulesUrl).pipe(
            map((schedules: ISchedule[]) => schedules.find(t => t.id === id)),
            // tap(data => console.log('Schedules:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getActivities(): Observable<IActivity[]> {
        return this.httpClient.get<IActivity[]>(this.activitiesUrl).pipe(
            // tap(data => console.log('Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `Client side or Network Error Occured ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code ${err.status}, error message ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}