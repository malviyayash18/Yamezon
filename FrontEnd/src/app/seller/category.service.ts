import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  db = firebase.firestore();
  categories = [];

  async GetCategories() {
  await this.db.collection('categories').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let temp = {};
        temp['id'] = doc.id;
        temp['name'] = doc.data().name;
        this.categories.push(temp);
      })
    })
    return this.categories
  }
}
