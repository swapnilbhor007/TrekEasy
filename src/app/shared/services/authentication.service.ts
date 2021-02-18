import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { IUser } from "../models/user";

@Injectable({ providedIn: "root" })
export class AuthenticationService {

  private loginUrl = "assets/data/users.json";
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get getCurrentUser(): IUser {
    return this.currentUserSubject.value;
  }

  getUser(username: string, password: string) : Observable<IUser> {
    return this.httpClient.get<IUser[]>(this.loginUrl).pipe(
      map((users : IUser[]) => users.find(u => u.username == username && u.password == password)),
      catchError(this.handleError)
      )
  }

  login(username: string, password: string) {
    return this.getUser(username, password)
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }

            return user;
        }));
  }
 
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
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
