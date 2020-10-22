import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  db = firebase.firestore();

  id: any;

  constructor(private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params.id
    console.log(this.id);
    this.GetProduct();
   }

  ngOnInit(): void {
  }

  GetProduct() {
    // this.db.collection(`products/0IHxVFtVA0K9b6NT7hpZ`).get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.data());
    //   })
    // })
  }

}
