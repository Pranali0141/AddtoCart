import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  public CartItem:any=[];
  public ProductList = new BehaviorSubject<any>([])

  get(){
    return this.ProductList.asObservable();
  }

  addtocart(product:any){
    this.CartItem.push(product);
    this.ProductList.next(this.CartItem);
    console.log(this.CartItem);
  }
}
