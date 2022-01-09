import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-predoct',
  templateUrl: './admin-predoct.component.html',
  styleUrls: ['./admin-predoct.component.css']
})
export class AdminPredoctComponent implements OnInit {
  
  

  constructor(private http:HttpClient) { }
  // addproduct: FormGroup;
  postId:any;
  ngOnInit(): void {
  }
  displayMessage(msg:string){
    console.log(msg);
  }

}
