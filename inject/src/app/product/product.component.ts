import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../share/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product;

  constructor(public productService:ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
