import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Yamezon';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.subscribe(user => {
      if(user) {
        let returnUrl = localStorage.getItem('returnUrl')
        this.router.navigateByUrl(returnUrl);
      }
    })

  }
}



