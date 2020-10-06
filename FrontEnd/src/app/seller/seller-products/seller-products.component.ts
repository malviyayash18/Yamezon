import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss']
})
export class SellerProductsComponent implements OnInit {

  sellerProducts :any;

  constructor(public productService: ProductService) { 
   this.sellerProducts = productService.GetProducts();
   }

  ngOnInit(): void {
  }  
  


  

}
