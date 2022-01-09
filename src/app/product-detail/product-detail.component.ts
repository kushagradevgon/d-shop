import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ExpandService } from '../service/expand.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public val:any;
  constructor( private dataShareService: ExpandService,private cart:CartService) { 
}


  ngOnInit(): void {
    this.dataShareService.sharedata.subscribe(res=>
      {
        this.val=res;
        // this.gtotal=this.cart.getTotalPrice();
      });
  }
  addtocart(item:any){
    this.cart.addtoCart(item);
  }

}
