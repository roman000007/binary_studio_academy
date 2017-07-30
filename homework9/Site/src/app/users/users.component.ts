import { SortPipe } from './../pipes/sort.pipe';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  type: string;
  direction: string;
  types: string[];
  directions: string[];
  currentClasses: string[];
  search: string;
  sortedBy: number;
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.type = null;
    this.direction = null;
    this.sortedBy = -1;
    this.search = "";

    this.types = ['firstname', 'lastname', 'email', 'date', 'pass'];
    this.directions = ['desc', 'desc', 'desc', 'desc', 'desc'];
    this.currentClasses = ['fa fa-sort', 'fa fa-sort', 'fa fa-sort', 'fa fa-sort', 'fa fa-sort'];

    this.users = this.userService.getUsers();
  }

  setSortColumn(colInd: number) {
    if (this.sortedBy == colInd) {
      this.directions[colInd] = this.directions[colInd] === 'asc' ? 'desc' : 'asc';
    }
    this.direction = this.directions[colInd];
    this.type = this.types[colInd];
    for (let i = 0; i < 5; i++) {
      if (i != colInd) {
        this.currentClasses[i] = 'fa fa-sort';
      } else {
        this.currentClasses[i] = 'fa fa-sort-' + this.directions[i];
      }
    }
    this.sortedBy = colInd;
  }


}
