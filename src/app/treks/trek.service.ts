import { Injectable } from '@angular/core';
import { ITrek } from './trek';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'
import { ISchedule } from './schedule';

@Injectable({
    providedIn: 'root'
})

export class TrekService {

    constructor(private httpClient: HttpClient) { }

    private url = 'assets/data/events.json';
    private schedulesUrl = 'assets/data/schedules.json';
    // private url = 'http://localhost:4000/treks';
    // private schedulesUrl = 'http://localhost:4000/schedules';

    getTreks(): Observable<ITrek[]> {
        return this.httpClient.get<ITrek[]>(this.url).pipe(
            tap(data => console.log('Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getTrekDetails(id: number): Observable<ITrek> {
        return this.getTreks().pipe(
            map((treks: ITrek[]) => treks.find(t => t.id === id)),
            tap(data => console.log('Trek:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getUpcomingTreks(): Observable<ITrek[]> {
        return this.httpClient.get<ITrek[]>(this.url).pipe(
            map((treks: ITrek[]) => treks.filter(t => new Date(t.eventDate) > new Date())),
            tap(data => console.log('Upcoming Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getRelatedTreks(activities : String[]): Observable<ITrek[]> {
        return this.httpClient.get<ITrek[]>(this.url).pipe(
            map((treks: ITrek[]) => treks.filter(t=> t.activities.toString() == activities.toString())),
            tap(data => console.log('Related Treks:' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getScheduleDetails(id: number): Observable<ISchedule> {
        return this.httpClient.get<ISchedule[]>(this.schedulesUrl).pipe(
            map((schedules: ISchedule[]) => schedules.find(t => t.id === id)),
            tap(data => console.log('Schedules:' + JSON.stringify(data))),
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