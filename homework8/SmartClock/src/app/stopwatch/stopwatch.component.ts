import { Component, OnInit } from '@angular/core';
import {StopwatchService} from './../services/stopwatch.service'

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  providers: [StopwatchService]
})
export class StopwatchComponent implements OnInit {

  constructor(public stopwatchService: StopwatchService) { }

  ngOnInit() {
  }

}
