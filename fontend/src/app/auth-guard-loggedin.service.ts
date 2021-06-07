import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedinService implements CanActivate{

  constructor(public authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLoggedIn) {
        this.router.navigate(['/'])
     }
     return true;
  }
}
