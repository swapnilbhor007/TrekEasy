import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  pageTitle: String = 'About Us';

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
