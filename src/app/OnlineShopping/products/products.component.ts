import { Component } from '@angular/core';
import { CartService } from 'src/app/OnlineShopService/cart.service';
import { ProductService } from 'src/app/OnlineShopService/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  ProductList1:any;

  constructor(private productapi:ProductService , private cart:CartService){
    this.featchData();
  }

  featchData(){
    this.productapi.getData().subscribe(res=>{
      console.log(res);
      this.ProductList1=res;
    })
  }

  ADDTOCART(item:any){
    this.cart.addtocart(item)
  }
}
