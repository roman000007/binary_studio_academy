import { Component, OnInit } from '@angular/core';
import {TimeService} from './../services/time.service'
@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [TimeService]
})
export class TimeComponent implements OnInit {
    time: string;
    constructor(public timeService: TimeService) { }

  ngOnInit() {
        setInterval(()=> {
      this.time = this.timeService.getTime();
    }, 100);
  }

}
