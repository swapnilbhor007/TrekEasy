import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})

export class ErrorComponent implements OnInit {
    pageTitle: String = 'Error';
    errorTitle: String = 'Page not found';
    errorMessage: string;

    ngOnInit() {

    }
}