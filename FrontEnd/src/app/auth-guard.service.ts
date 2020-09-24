import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  public temp: any;

  constructor(private authService: AuthService,
  private router: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['login']);
      }
      if (this.authService.user) {
        console.log('well the user is there !!')
        console.log(this.authService.user)
        // this.temp = JSON.stringify(this.authService.user);
        // console.log(this.temp);
        // console.log(JSON.parse(this.temp));
        // this.authService.user['displayName'] = this.authService.user['displayName'].split(' ')[0]
      }
      
      return true;
           
      }
    }