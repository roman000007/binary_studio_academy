import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { NgForm } from '@angular/forms/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  invalidPassword: boolean;
  email:string
  pass: string;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.invalidPassword = false;
  }

  loginUser(form: NgForm) {
    if (form.valid) {
      this.userService.loginUser(form.value.email, form.value.pass);
      const currUser = this.userService.getCurrUser();
      if (currUser) {
        this.router.navigate(['main']);
        this.invalidPassword = false;
      } else {

        this.invalidPassword = true;
        this.email = "";
        this.pass = "";
      }

    }
  }


  checkPassword() {
    return this.invalidPassword;
  }


}
