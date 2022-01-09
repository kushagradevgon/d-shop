import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  public productList:any;
  constructor(private api :ApiService, private cart:CartService) { }


  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  

  // myInputMessage

}
