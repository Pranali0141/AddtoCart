import { Component } from '@angular/core';
import { CartService } from 'src/app/OnlineShopService/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {


  constructor(private api:CartService){
    this.getproducts();
  }
  product:any;
  getproducts(){
    this.api.get().subscribe(res=>{
      this.product=res;
    })
  }
}
