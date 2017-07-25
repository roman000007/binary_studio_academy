import { Component, OnInit } from '@angular/core';
import {TimerService} from './../services/timer.service'

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {
  time:number;
  intervalId: any;
  timeStr: string;
  started: boolean;
  
  constructor(public timerService: TimerService) { }

  ngOnInit() {
    this.time = 0;
    this.started = false;
    this.timerService.prepareValue(this.time);
    this.timeStr = this.timerService.convertTimeToStr(this.time);   
  }
  
  startTimer(){
    console.log("Timer: startTimer()");
    if(this.time <= 0){
       this.clearTimer();
       return;
     }
    this.started = true;
    this.intervalId = setInterval(()=>{
     this.time -= 100;
     this.timeStr = this.timerService.convertTimeToStr(this.time);
     if(this.time <= 0){
       this.clearTimer();
     }
    },100)
    
  }
  
  pauseTimer(){
    console.log("Timer: pauseTimer()");
    this.timeStr = this.timerService.convertTimeToStr(this.time);
    this.started = false;
    clearInterval(this.intervalId);
  }


  clearTimer(){
    console.log("Timer: clearTimer()");
    this.time = 0;
    this.timerService.prepareValue(this.time);
    this.pauseTimer();
  }


  inputChanged(value: number){
    console.log("Timer: inputChanged()");
    value = this.timerService.prepareValue(value);

    this.time = value * 60000;
    this.timeStr = this.timerService.convertTimeToStr(this.time);
  };

}
