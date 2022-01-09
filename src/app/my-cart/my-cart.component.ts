import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  public product:any=[];
  public gtotal!:number;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>
      {
        this.product=res;
        this.gtotal=this.cart.getTotalPrice();
      });
  }

  removeItem(item:any){
    this.cart.removeCartItem(item);
  }
  removecart(){
    this.cart.removecart();
  }

}
