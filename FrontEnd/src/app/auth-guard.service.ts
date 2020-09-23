import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class AuthGuardService implements CanActivate {

//   constructor(
//     private authService: AuthService, 
//     public router: Router
//     ) { } 

//     CanActivate(
//       next: ActivatedRouteSnapshot,
//       state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//         // if(this.authService.isLoggedIn() !== true) {
//         //   this.router.navigate(['/orders'])
//         // }
//         // return true;        
//         // }

//         return true;        

//         // return this.authService.isLoggedIn() ? true : this.router.navigate(["login"]);
//     }
// }

export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService,
  private router: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['login']);
      }
      return true;
           
      }
    }