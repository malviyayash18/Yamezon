import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// import { User } from 'firebase';
import { Observable } from 'rxjs';
import { NgZone } from '@angular/core';
import { User } from "./user";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(public afAuth: AngularFireAuth, 
    public router: Router,
    public afs: AngularFirestore,
    public ngZone: NgZone) {

      this.user = afAuth.authState;

    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
        this,this.router.navigate(['/']);
      })    
      // this.setUserData(result.user)
    }).catch((error) => {
      window.alert(error);
    })
  }

  // setUserData(userTemp) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userTemp.uid}`);
  //   const userData: User = {
  //     uid: userTemp.uid,
  //     email: userTemp.email,
  //     displayName: userTemp.displayName,
  //     photoURL: userTemp.photoURL,
  //     emailVerified: userTemp.emailVerified
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }

  isLoggedIn():boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    })
  }
  // SignIn with Google
  signInWithGoogle() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // SignIn with Facebook
  signInWithFacebook() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // SignIn with Microsoft
  signInWithMicrosoft() {
    return this.AuthLogin(new firebase.auth.OAuthProvider('microsoft.com'));
  }

  // SignIn with Email and Password
  SignInWithEmail(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        // this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error);  
    })
  }


}
