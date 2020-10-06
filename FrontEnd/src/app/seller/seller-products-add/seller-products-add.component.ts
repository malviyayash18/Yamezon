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
  product: any;

  constructor
  (
    public categoryService: CategoryService, 
    private productService: ProductService,
    private route: ActivatedRoute
    ) {     
    this.categoryService.GetCategories();
    let id = this.route.snapshot.params.id;
    console.log(id)
    if (id) {
      this.product = this.productService.GetProduct(id)
    }
  }

  ngOnInit(): void {
  }

  Save(product) {
    this.productService.CreateProduct(product);
  }

}
