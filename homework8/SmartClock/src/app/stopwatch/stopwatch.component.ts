import { Component, OnInit } from '@angular/core';
import {StopwatchService} from './../services/stopwatch.service'

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  providers: [StopwatchService]
})
export class StopwatchComponent implements OnInit {

  time:number;
  lapTime: number;
  intervalId: any;
  timeStr: string;
  started: boolean;
  lapTimeStr: string;
  laps: number[];
  avg: number;
  
  constructor(public stopWatchService: StopwatchService) { }

  ngOnInit() {
    this.laps = [];
    this.time = 0;
    this.lapTime = 0;
    this.avg = 0;
    this.started = false;
    this.timeStr = this.stopWatchService.convertTimeToStr(this.time);   
  }
  
  startStopwatch(){
    console.log("Stopwatch: startStopwatch()");

    this.started = true;
    this.intervalId = setInterval(()=>{
     this.time += 100;
     this.lapTime += 100;
     this.timeStr = this.stopWatchService.convertTimeToStr(this.time);
     this.lapTimeStr = this.stopWatchService.convertTimeToStr(this.lapTime);
    },100)
    
  }
  
  pauseStopwatch(){
    console.log("Timer: pauseTimer()");
    this.timeStr = this.stopWatchService.convertTimeToStr(this.time);
    this.lapTimeStr = this.stopWatchService.convertTimeToStr(this.lapTime);
    this.started = false;
    clearInterval(this.intervalId);
  }


  clearStopwatch(){
    console.log("Timer: clearTimer()");
    this.time = 0;
    this.lapTime = 0;
    this.laps = [];
    this.pauseStopwatch();
    this.stopWatchService.clearLaps();
  }

  lap(){
    console.log(this.lapTime);
    console.log(this.lapTimeStr);
    this.lapTimeStr = this.stopWatchService.convertTimeToStr(this.lapTime);
    console.log(this.lapTime);
    this.laps.push(this.lapTime);
    console.log(this.laps);
    this.lapTime = 0;
    this.avg = this.stopWatchService.getAvg(this.laps);
    this.stopWatchService.updateLaps(this.avg, this.laps);
  }

}
