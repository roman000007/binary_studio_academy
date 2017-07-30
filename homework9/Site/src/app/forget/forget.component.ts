import { Router } from '@angular/router';
import { HumanService } from './../services/human.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
  providers: [UserService]
})
export class ForgetComponent implements OnInit {
  answer: string;
  email: string;
  goodAnswer: boolean;
  sample: string;
  constructor(public userService: UserService, public humanService: HumanService, public router: Router) { 
    this.sample = this.humanService.sample;
  }

  changeAnswer(answ: number){
    this.goodAnswer = this.humanService.isGoodAnswer(answ);
  }

  ngOnInit() {
    this.goodAnswer = true;
  }

  getPassword(form: NgForm) {
    this.changeAnswer(form.value.pass);
    if(this.goodAnswer){
      this.router.navigate(['forget/' + form.value.email.toString()]);
    }else{
      this.router.navigate(['forget']);
      this.email = "";
      this.answer = "";
    }
  }


}
