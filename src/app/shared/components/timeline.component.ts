import { Component, OnInit, Input, Output } from '@angular/core';
import { ISchedule } from 'src/app/treks/schedule';
import { TrekService } from '../../treks/trek.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() schedule: ISchedule;
  
  constructor(private trekService: TrekService) { }

  ngOnInit() {
  }

 
}
