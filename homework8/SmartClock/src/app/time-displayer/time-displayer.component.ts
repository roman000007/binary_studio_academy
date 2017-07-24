import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'time-displayer',
  templateUrl: './time-displayer.component.html',
  styleUrls: ['./time-displayer.component.css']
})
export class TimeDisplayerComponent implements OnInit {
  @Input() from: number;
  @Input() to: number;
  @Input() startPosition: number;
  @Input() increase: number;
  @Input() interval: number;
  constructor() { }

  ngOnInit() {
  }

}
