import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-products-add',
  templateUrl: './seller-products-add.component.html',
  styleUrls: ['./seller-products-add.component.scss']
})
export class SellerProductsAddComponent implements OnInit {

  categories : any;

  constructor
  (
    public categoryService: CategoryService, 
    public productService: ProductService,
    private route: ActivatedRoute
    ) {     
    if (categoryService.categories.length == 0) {
      this.categoryService.GetCategories();
    }
  }

  ngOnInit(): void {
  }

  Save(title, price, category, imageUrl) {
    let product = {
      'title': title,
      'price': price,
      'category': category,
      'imageUrl': imageUrl
    }
    console.log(product);
    this.productService.CreateProduct(product);
  }

}
