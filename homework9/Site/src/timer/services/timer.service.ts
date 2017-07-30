import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {

  constructor() { }

  convertTimeToStr(value){
    let minutes = Math.floor(value / 60000);
    value -= minutes * 60000;
    let seconds = Math.floor(value / 1000);
    value -= seconds * 1000;
    let miliseconds = value;

    let milisecondsStr, minutesStr, secondsStr;

    if(miliseconds < 10){
      milisecondsStr = "00" + miliseconds.toString();
    }
    if(miliseconds >= 10 && miliseconds < 100){
      milisecondsStr = "0" + miliseconds.toString();
    }
    if(miliseconds >= 100){
      milisecondsStr = miliseconds.toString();
    }
    minutesStr = minutes >= 10 ? minutes.toString() : "0" + minutes.toString();
    secondsStr = seconds >= 10 ? seconds.toString() : "0" + seconds.toString();

    return [minutesStr, secondsStr, milisecondsStr].join(":"); 
  }


  prepareValue(value: number){
    let input = document.getElementById('timer-input') as HTMLInputElement;
    value = Math.min(value, 59);
    value = Math.max(value, 0);
    input.value = value.toString();
    return value;
  }

}
