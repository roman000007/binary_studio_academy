import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }


  getTime() {
      let currTime = new Date();
      let hoursStr = currTime.getHours() < 10 ? "0" + currTime.getHours().toString(): currTime.getHours().toString();
      let minutesStr = currTime.getMinutes() < 10 ? "0" + currTime.getMinutes().toString() : currTime.getMinutes().toString();
      let secondsStr = currTime.getSeconds() < 10 ? "0" + currTime.getSeconds().toString() : currTime.getSeconds().toString();
    return [hoursStr, minutesStr, secondsStr].join(":");
  }
}
