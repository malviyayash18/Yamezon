import { CategoryService } from './../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-seller-product-edit',
  templateUrl: './seller-product-edit.component.html',
  styleUrls: ['./seller-product-edit.component.scss']
})
export class SellerProductEditComponent implements OnInit {

  db = firebase.firestore();
  id;

  constructor(
    public productService: ProductService,
    public categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    if (categoryService.categories.length == 0) {
      this.categoryService.GetCategories();
    }

    this.id = this.route.snapshot.params.id;

    if (this.id) {
      this.productService.GetProduct(this.id)
    }
   }

  ngOnInit(): void {
  }

  Update(title, price, category, imageurl) {
    let product = {
      'title': title,
      'price': price,
      'category': category,
      'imageUrl': imageurl,
    };
    this.db.collection('products').doc(this.id).update(product).then(() => {
      this.router.navigate(['/seller/products']);
    })
  }  

  Delete() {
    this.db.collection('products').doc(this.id).delete().then(() => {
      this.router.navigate(['/seller/products']);
    })
  }

}
