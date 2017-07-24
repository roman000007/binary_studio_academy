import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  from: number;
  to: number;
  startPosition: number;
  increase: number;
  interval: number;
  constructor() { }

  ngOnInit() {
  }

}
