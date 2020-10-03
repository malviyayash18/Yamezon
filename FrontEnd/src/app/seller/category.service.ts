import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  GetCategories() {
    console.log(this.db.collection('categories').snapshotChanges());
  }
}
