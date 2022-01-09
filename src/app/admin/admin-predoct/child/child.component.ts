import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  addproduct: FormGroup;
  ngOnInit(): void {
    this.addproduct=new FormGroup({
       productname: new FormControl(),
       producttype: new FormControl(),
       productprice:new FormControl()  
    })
  }
  @Output() newItemEvent = new EventEmitter<string>();
onSubmit(){
  this.newItemEvent.emit(this.addproduct.value);
  
}

}
