import { Component, OnInit } from '@angular/core';
import {Product} from "../share/product.service";
import {ProductService} from "../share/product.service";
import {Product2Service} from "../share/product2.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers: [{provide:ProductService,useClass:Product2Service}]
})
export class Product2Component implements OnInit {
  product:Product;

  constructor(public producetService:ProductService) { }

  ngOnInit() {
    this.product = this.producetService.getProduct();
  }

}
