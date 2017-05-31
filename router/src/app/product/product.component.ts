import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId:number;

  constructor(public routerInfo:ActivatedRoute) { }

  ngOnInit() {
    //快照
    // this.productId = this.routerInfo.snapshot.params["id"];
    //订阅
    this.routerInfo.params.subscribe((params:Params)=>{
      this.productId = params["id"];
    });
  }

}
