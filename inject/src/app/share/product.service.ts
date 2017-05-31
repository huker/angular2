import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  //声明这个方法 返回一个Product对象
  getProduct(): Product {
    return new Product(0,"iphone",1999,"777777");
  }
}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){
  }
}
