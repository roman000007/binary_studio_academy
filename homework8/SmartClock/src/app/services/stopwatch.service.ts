import { Injectable } from '@angular/core';

@Injectable()
export class StopwatchService {

  constructor() { }

  convertTimeToStr(value) {
    let minutes = Math.floor(value / 60000);
    value -= minutes * 60000;
    let seconds = Math.floor(value / 1000);
    value -= seconds * 1000;
    let miliseconds = value;

    let milisecondsStr, minutesStr, secondsStr;

    if (miliseconds < 10) {
      milisecondsStr = "00" + miliseconds.toString();
    }
    if (miliseconds >= 10 && miliseconds < 100) {
      milisecondsStr = "0" + miliseconds.toString();
    }
    if (miliseconds >= 100) {
      milisecondsStr = miliseconds.toString();
    }
    minutesStr = minutes >= 10 ? minutes.toString() : "0" + minutes.toString();
    secondsStr = seconds >= 10 ? seconds.toString() : "0" + seconds.toString();

    return [minutesStr, secondsStr, milisecondsStr].join(":");
  }
  getAvg(numbers: number[]) {
    if (numbers.length == 0) return 0;
    let s = numbers.reduce((a, b) => (a + b), 0);
    return Math.round(s / numbers.length);
  }

  updateLaps(avgNum: number, laps: number[]) {
    this.clearLaps();
    const container = document.getElementById('stopwatch-laps-container');
    
    const avgText = document.createElement('div');
      avgText.setAttribute('class', 'stopwatch-avg');
      avgText.textContent = this.convertTimeToStr(avgNum);
      container.appendChild(avgText);

    for (let i = 0; i < laps.length; i++) {
      const lap = document.createElement('div');
      lap.setAttribute('class', 'stopwatch-lap');

      const time = document.createElement('div');
      time.textContent = this.convertTimeToStr(laps[i]);
      time.setAttribute('class', 'black-lap');
      lap.appendChild(time);

      if (i != 0) {
        const prev = document.createElement('div');
        let diff = laps[i] - laps[i - 1];
        prev.setAttribute('class', diff >= 0 ? 'worse-lap' : 'better-lap');
        diff = diff >= 0 ? diff : -diff;
        prev.textContent = this.convertTimeToStr(Math.round(diff));
        lap.appendChild(prev);
      }

      const avg = document.createElement('div');
      let diff = laps[i] - avgNum;
      avg.setAttribute('class', diff >= 0 ? 'worse-lap' : 'better-lap');
      diff = diff >= 0 ? diff : -diff;
      avg.textContent = this.convertTimeToStr(Math.round(diff));
      lap.appendChild(avg);
  
      container.appendChild(lap);

    }

  }

  clearLaps() {
    const container = document.getElementById('stopwatch-laps-container');
    container.innerHTML = "";
  }
}
