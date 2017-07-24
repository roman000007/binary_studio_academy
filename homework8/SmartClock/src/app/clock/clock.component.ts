import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  selectedClockType: string = 'Time';

  clockTypes = [
    'Stopwatch',
    'Time',
    'Timer',
  ];


  constructor() { }

  ngOnInit() {
  }

}
