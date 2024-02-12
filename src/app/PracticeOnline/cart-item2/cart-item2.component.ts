import { Component } from '@angular/core';
import { Cart2Service } from 'src/app/PracticeService/cart2.service';

@Component({
  selector: 'app-cart-item2',
  templateUrl: './cart-item2.component.html',
  styleUrls: ['./cart-item2.component.css']
})
export class CartItem2Component {
  products:any;
  constructor(private cart:Cart2Service){
      this.get1();
  }
  get1(){
    this.cart.get().subscribe((res:any)=>{
      this.products=res;
    })
  }
}
