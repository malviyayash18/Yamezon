import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  async GetCategories() {
    const events = await this.db.collection('categories').get()
    console.log(events.forEach);
  }
}
