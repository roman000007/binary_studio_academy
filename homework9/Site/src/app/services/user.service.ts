import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users = [];
  constructor() {
    // localStorage.clear();
    this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    this.users = JSON.parse(localStorage.getItem("users"));
    if (!this.users) this.users = [];
    return this.users;
  }

  addUser(user) {
    if (!this.findUserByEmail(user.email)) {
      this.users.push(user);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.getUsers();
    }
    console.log(this.users);
  }

  loginUser(email: string, pass: string) {
    const usr = this.findUserByEmailAndPass(email, pass);
    if (usr) {
      sessionStorage.setItem("currUser", JSON.stringify(usr));
    }
  }

  logoutUser() {
    sessionStorage.removeItem("currUser");
  }

  getCurrUser() {
    const usr = JSON.parse(sessionStorage.getItem("currUser"));
    if (usr) {
      return usr;
    } else {
      return false;
    }
  }

  findUserByEmail(email: string) {
    let res = false;
    this.users.some((user) => {
      if (user.email == email) {
        res = user;
      }
      return res;
    });
    return res;
  }

  findIndexByEmail(email: string) {
    let res:any = false;
    this.users.some((user, index) => {
      if (user.email == email) {
        res = index;
      }
      return res;
    });
    return res;
  }

  updateUser(user){
    let i = this.findIndexByEmail(user.email);
    if(i !== false){
      this.users[i] = Object.assign(this.users[i], user);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.getUsers();
    }
  }


  isOnline(): boolean {
      const user = this.getCurrUser();
      let res: boolean = user === false ? false : true;
      return res;
  }


  findUserByEmailAndPass(email: string, pass: string) {
    let res = false;
    this.users.some((user) => {
      if (user.email == email && user.pass == pass) {
        res = user;
      }
      return res;
    });
    return res;
  }
}
