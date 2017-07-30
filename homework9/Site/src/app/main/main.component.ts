import { UserService } from './../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private userService:UserService){

  }

  ngOnInit() {
    
  }

  logout(){
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }


}
