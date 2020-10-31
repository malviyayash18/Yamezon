import { Observable } from 'rxjs';
import { MainProductService } from './../main-product.service';
import { ProductService } from './../seller/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  id: any;
  product: Observable<any>;

  constructor(private route: ActivatedRoute, public mainProductService : MainProductService) { 
    this.id = this.route.snapshot.params.id
    console.log(this.id);
    this.mainProductService.GetEntireProduct(this.id);
    this.product = this.mainProductService.mainProduct
    console.log(this.product);
   }

  ngOnInit(): void {
    
  }

  

}
