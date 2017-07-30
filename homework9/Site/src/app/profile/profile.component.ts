import { NgForm } from '@angular/forms/forms';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstname:string;
  lastname:string;
  email:string;
  date:string;
  pass:string;
  updated: boolean;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.updated = false;
    const user:any = this.userService.getCurrUser();
    console.log(user);
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.date = user.date;
    this.pass = user.pass;

  }

  updateUser(form: NgForm) {
    this.updated = false;
    if(form.valid){
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        date: this.date,
        pass: this.pass
      }
    this.userService.updateUser(user);
    this.updated = true;
    setTimeout(()=>{
      this.updated = false;
    }, 2000);
    }
  }
}
