import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MainProductService {

  db = firebase.firestore();

  mainProduct: any;

  constructor() { }

  GetEntireProduct(id) {
    this.db.collection('products').doc(id).get().then((doc) => {
      this.mainProduct = doc.data();
    })
  }
}
