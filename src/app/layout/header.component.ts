import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrekService } from '../treks/trek.service'
import { IActivity } from '../home/activities';
// import {LoginComponent} from '../shared/components/login.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  activities: IActivity[];
  errorMessage: string;

  // @ViewChild(LoginComponent)
  // private loginComponent: LoginComponent

  constructor(private trekService: TrekService) { }

  ngOnInit() {
    this.getActivities();
  }

  ngAfterViewInit(){
    
  }
  
  getActivities() {
    this.trekService.getActivities().subscribe({
      next: activities => { this.activities = activities },
      error: err => { this.errorMessage = err }
    });
  }

  // doLogin(){
  // this.loginComponent.show();
  // }
}
