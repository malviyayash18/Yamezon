import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from 'firebase';
// import { User } from './user';
import { Observable } from 'rxjs';
import { NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<User>;
  public isLoggedIn : Observable<string>;


   constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
    this.user = afAuth.authState; 
    }

   // Create new user with Email and Password
   CreateUserWithEmailAndPassword(email, password) {
     this.afAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorMessage)
     })
   }

  // SignIn with Email and Password
  SignInWithEmailAndPassword(email, password) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
      window.alert(error.message);      
    }).then((result) => {
      
    })
  }

  // SignIn with Google
  SignInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider).then((result) => {
      this.router.navigate(['/']);
    }).catch((error) => {
      window.alert(error.message);
    })
  }

  // SignIn with Facebook
  SignInWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.signInWithPopup(provider).then((result) => {
      this.router.navigate(['/']);
    }).catch((error) => {
      window.alert(error.message);
    })
  }

  // SignIn with Microsoft
  SignInWithMicrosoft() {
    var provider = new firebase.auth.OAuthProvider('microsoft.com');
    this.afAuth.signInWithPopup(provider).then((result) => {
      this.router.navigate(['/']);
    }).catch((error) => {
      window.alert(error.message);
    })
  }

  // LogOut User
  Logout() {
    this.afAuth.signOut()
    this.router.navigate(['/'])
  }
}
