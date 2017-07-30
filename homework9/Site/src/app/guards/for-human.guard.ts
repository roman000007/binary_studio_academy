import { HumanService } from './../services/human.service';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ForHumanGuard implements CanActivate {

constructor(public humanService: HumanService, private router: Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let result = this.humanService.goodAnswer;
    this.humanService.goodAnswer = false;
    if (result) {
        return true;
    }
    else {
        this.router.navigate(['forget']);
    }
  }
}
