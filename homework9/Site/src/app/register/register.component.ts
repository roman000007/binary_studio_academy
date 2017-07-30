import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/forms';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  lastname: string;
  firstname: string;
  email: string;
  date: string;
  pass: string;
  alreadyRegistred: boolean;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.alreadyRegistred = false;
  }

  registerUser(form: NgForm) {
    if (form.valid) {
      if (!this.userService.findUserByEmail(form.value.email)) {
        console.log("User registred");
        this.userService.addUser(form.value);
        this.alreadyRegistred = false;
        this.router.navigate(['login']);

      }
      else {
        this.alreadyRegistred = true;
      }
    }
  }
}
