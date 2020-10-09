import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private authService: AuthService, private router: Router) {  }

  db = firebase.firestore(); 

  sellerProducts = [];
  product = {
    'title': '',
    'price': '',
    'category': '',
    'imageUrl': '',
  };

  async CreateProduct(product) {
    product['seller'] = this.authService.user.displayName;
    await this.db.collection('products').add(product)
    this.router.navigate(['/seller/products']);
  }

  async GetProducts() {
    this.sellerProducts = [];
    await this.db.collection('products').orderBy('title', "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let temp = {}
        temp['id'] = doc.id;
        temp['title'] = doc.data().title;
        temp['price'] = doc.data().price;
        temp['category'] = doc.data().category; 
        this.sellerProducts.push(temp);
      })
    })
    // return this.sellerProducts;
  }

  async GetProduct(productId) {
    await this.db.collection('products').doc(productId).get().then((doc) => {
      this.product.title = doc.data().title;
      this.product.price = doc.data().price;
      this.product.category = doc.data().category;
      this.product.imageUrl = doc.data().imageUrl;
    })
    console.log(this.product);
  }

  async Search(searchQuery) {
    this.sellerProducts = [];
    await this.db.collection('products').where("title", "==", searchQuery).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let temp = {}
        temp['id'] = doc.id;
        temp['title'] = doc.data().title;
        temp['price'] = doc.data().price;
        temp['category'] = doc.data().category; 
        this.sellerProducts.push(temp);
      })
    })
    console.log(this.sellerProducts)
  }

}
