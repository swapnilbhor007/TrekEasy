import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  pageTitle:String = 'Contact Us';
  
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
