import { Component, OnInit, Input } from '@angular/core';
import { ISchedule } from 'src/app/treks/schedule';
import { TrekService } from '../../treks/trek.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() id: number;
  schedule: ISchedule;
  errorMessage: string;

  constructor(private trekService: TrekService) { }

  ngOnInit() {
    this.getSchedule(this.id);
  }

  getSchedule(id: number) {
    this.trekService.getScheduleDetails(id).subscribe({
      next: schedule => this.schedule = schedule,
      error: err => this.errorMessage = err
    });
  }
}
