import { ActivatedRoute, Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// import { User } from 'firebase';
import { User } from './user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

   constructor(
    public afAuth: AngularFireAuth, 
    public afs: AngularFirestore, 
    public router: Router, 
    public ngZone: NgZone,
    public route: ActivatedRoute
    ) { 
      this.afAuth.authState.subscribe(user => {
        if(user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
        // console.log(this.user);
      })
    }

    // Function to set user data
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      if (user.displayName) {
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          firstName: user.displayName.split(' ')[0],
          lastName: user.displayName.split(' ')[1],
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified
        }
        return userRef.set(userData, {
          merge: true
        })
      } else {
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          firstName: null,
          lastName: null,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified
        }
        return userRef.set(userData, {
          merge: true
        })
      }
      
    }

    // Auth login
    AuthLogin(provider) {

      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);

      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        var returnUrl = localStorage.getItem('returnUrl')
        console.log(returnUrl);
        this.SetUserData(result.user);
        // this.router.navigateByUrl(returnUrl)
        this.router.navigate(['/']);
      }).catch((error) => {
        window.alert(error.message);
      })
    }

    // Send email verification
    SendEmailVerification() {
      let user = firebase.auth().currentUser;
      user.sendEmailVerification();
    }

    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null && user.emailVerified !== false) ? true : false;
    }

   // Create new user with Email and Password
   CreateUserWithEmailAndPassword(email, password) {
     this.afAuth.createUserWithEmailAndPassword(email, password)
     .then((result) => {
      this.SendEmailVerification();
      this.SetUserData(result.user);
      this.router.navigate(['signup-success'])
     }).catch((error) => {
       window.alert(error.message);
     })
   }

  // SignIn with Email and Password
  SignInWithEmailAndPassword(email, password) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    return this.afAuth.signInWithEmailAndPassword(email, password)
    // .then((result) => {
    //   this.ngZone.run(() => {
    //     this.router.navigateByUrl(returnUrl)
    //   });
    //   this.SetUserData(result.user);
    // }).catch((error) => {
    //   window.alert(error.message);
    // })
  }

  // SignIn with Google
  SignInWithGoogle() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // SignIn with Facebook
  SignInWithFacebook() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // SignIn with Microsoft
  SignInWithMicrosoft() {
    return this.AuthLogin(new firebase.auth.OAuthProvider('microsoft.com'));
  }

  // LogOut User
  Logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['logout']);
    })
  }
}
