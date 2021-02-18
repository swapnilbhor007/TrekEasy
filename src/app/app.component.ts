import { Component, OnInit } from '@angular/core';
import { IUser } from './shared/models/user';
import { AuthenticationService} from './shared/services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 })
export class AppComponent implements OnInit {
  pageTitle = 'TrekEasy';

  constructor(){
  }
  
  ngOnInit(){
  }
}
