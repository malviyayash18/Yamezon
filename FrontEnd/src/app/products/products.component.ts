import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params.id
   }

  ngOnInit(): void {
  }

}
