import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut();
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook();
  }

  signInWithMicrosoft() {
    this.authService.signInWithMicrosoft();
  }

  signInWithEmail(email, password) {
    this.authService.SignInWithEmail(email, password)
  }
}
