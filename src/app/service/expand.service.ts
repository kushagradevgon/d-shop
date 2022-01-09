import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpandService {
  public index:any;
  public sharedata =new BehaviorSubject<any>([]);
  constructor() { }
  sendDataToOtherComponent(index:any){
    this.sharedata.next(index);
  }
}
