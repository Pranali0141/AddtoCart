import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {

  constructor(private http:HttpClient) { }

  public cartItem:any=[];
  public productlist = new BehaviorSubject<any>([])

  get(){
    return this.productlist.asObservable();
  }

  addtocart(product:any){
    this.cartItem.push(product);
    this.productlist.next(this.cartItem);
  }
}
