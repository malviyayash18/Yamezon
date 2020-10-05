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

  constructor(public categoryService: CategoryService, private productService: ProductService) { 
    
    this.categoryService.GetCategories()
  }

  ngOnInit(): void {
  }

  Save(product) {
    console.log(this.categories)
    // this.productService.CreateProduct(product);
  }

}
