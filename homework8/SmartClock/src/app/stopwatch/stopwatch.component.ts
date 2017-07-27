import { Component, OnInit } from '@angular/core';
import { StopwatchService } from './../services/stopwatch.service'

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  providers: [StopwatchService]
})
export class StopwatchComponent implements OnInit {

  time: number;
  lapTime: number;
  intervalId: any;
  timeStr: string;
  started: boolean;
  lapTimeStr: string;
  laps: number[];

  constructor(public stopWatchService: StopwatchService) { }

  ngOnInit() {
    this.laps = [];
    this.time = 0;
    this.lapTime = 0;
    this.started = false;
    this.timeStr = this.stopWatchService.convertTimeToStr(this.time);
    this.lapTimeStr = this.stopWatchService.convertTimeToStr(this.lapTime);
  }

  startStopwatch() {
    console.log("Stopwatch: startStopwatch()");

    this.started = true;
    this.intervalId = setInterval(() => {
      this.time += 100;
      this.lapTime += 100;
      this.timeStr = this.stopWatchService.convertTimeToStr(this.time);
      this.lapTimeStr = this.stopWatchService.convertTimeToStr(this.lapTime);
    }, 100)

  }

  pauseStopwatch() {
    console.log("Timer: pauseStopwatch()");
    this.timeStr = this.stopWatchService.convertTimeToStr(this.time);
    this.lapTimeStr = this.stopWatchService.convertTimeToStr(this.lapTime);
    this.started = false;
    clearInterval(this.intervalId);
  }


  clearStopwatch() {
    console.log("Timer: clearStopwatch()");
    this.time = 0;
    this.lapTime = 0;
    this.laps = [];
    this.pauseStopwatch();
  }

  lap() {
    console.log("Timer: lap()");
    this.lapTimeStr = this.stopWatchService.convertTimeToStr(this.lapTime);
    this.laps.push(this.lapTime);
    this.lapTime = 0;
  }

  getAvg() {
    return this.stopWatchService.getAvg(this.laps);
  }

  convertDiffToStr(date: number) {
    return this.stopWatchService.convertTimeToStr(Math.round(Math.abs(date)));
  }
}
