import { Injectable } from '@angular/core';
import {Product, ProductService} from "./product.service";

@Injectable()
export class Product2Service implements ProductService{
  getProduct(): Product {
    return new Product(1,"huawei",2999,"huaweihuaweihhhh");
  }

  constructor() { }

}
