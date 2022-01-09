import { Component,Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ExpandService } from 'src/app/service/expand.service';

@Component({
  selector: 'app-productchild',
  templateUrl: './productchild.component.html',
  styleUrls: ['./productchild.component.css']
})
export class ProductchildComponent implements OnInit {

  @Input() childitem:any;
  constructor(private dataShareService:ExpandService) { }
  ngOnInit(): void {
    
  }
  
  passData(index:any){
    this.dataShareService.sendDataToOtherComponent(index);
    
  }


}
