import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isOpen: boolean;
  public innerWidth: any;



  constructor(public authService: AuthService, public router: Router) {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  transition() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  Logout() {
    this.authService.Logout()
    this.router.navigate(['/'])
  }

}
