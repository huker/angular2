import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  private stocks:Array<Stock>;
  constructor() {
  }
  //页面初始化的时候调用的
  ngOnInit() {
    this.stocks = [
      new Stock(1,"1-stock",1.99,3.5,"这是第1只股票",["IT","internet"]),
      new Stock(2,"2-stock",2.25,4.6,"这是第2只股票",["teach","china"]),
      new Stock(3,"3-stock",2.56,2.6,"这是第3只股票",["new","global"]),
      new Stock(4,"4-stock",3.56,2.1,"这是第4只股票",["new","global"]),
      new Stock(5,"5-stock",4.56,3.1,"这是第5只股票",["new","global"]),
      new Stock(6,"6-stock",3.76,4.1,"这是第6只股票",["new","global"]),
    ];
  }

}

export class Stock {
  constructor(public id:number,
              public name:string,
              public price:number,
              public rating:number,
              public desc:string,
              public categories:Array<string>) {

  }
}
