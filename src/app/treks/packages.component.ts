import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  pageTitle: String = 'Packages';

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
