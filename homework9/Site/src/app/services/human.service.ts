import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class HumanService {
  
  sample:string;
  result:number;
  goodAnswer: boolean;

  constructor() { 
    let a = this.getRandomInt(1, 50);
    let b = this.getRandomInt(1, 50);
    this.sample = a.toString() + " + " + b.toString() + " = ?"
    this.result = a + b;
    this.goodAnswer = false;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  isGoodAnswer(answ:number){
    this.goodAnswer = this.result == answ;
    return this.goodAnswer;
  }

}
