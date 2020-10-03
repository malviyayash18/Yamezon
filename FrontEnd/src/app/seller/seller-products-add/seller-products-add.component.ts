import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-products-add',
  templateUrl: './seller-products-add.component.html',
  styleUrls: ['./seller-products-add.component.scss']
})
export class SellerProductsAddComponent implements OnInit {

  categories;

  constructor(private categoryService: CategoryService) { 
    this.categories = categoryService.GetCategories();
  }

  ngOnInit(): void {
  }

}
