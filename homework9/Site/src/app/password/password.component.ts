import { UserService } from './../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  email: string;
  password: string;
  exist: boolean;

 constructor(private activatedRoute: ActivatedRoute, public userService: UserService) {

 }
  ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
        let email = params.id;
        const usr:any = this.userService.findUserByEmail(email);
        this.exist = !usr ? false : true;
        if(this.exist){
        this.email = usr.email;
        this.password = usr.pass;
        }
      });
  }

}
