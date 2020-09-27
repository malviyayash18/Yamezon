import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public authService: AuthService) {
   }

  ngOnInit(): void {
  }

  SignInWithEmailAndPassword(email, password) {
    this.authService.SignInWithEmailAndPassword(email, password)
  }

  SignInWithGoogle() {
    this.authService.SignInWithGoogle();
  }

  SignInWithFacebook() {
    this.authService.SignInWithFacebook();
  }

  SignInWithMicrosoft() {
    this.authService.SignInWithMicrosoft();
  }
}
