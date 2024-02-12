import { Component } from '@angular/core';
import { Cart2Service } from 'src/app/PracticeService/cart2.service';
import { Product2Service } from 'src/app/PracticeService/product2.service';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component {

  constructor(private product:Product2Service, private cart:Cart2Service){
    this.featchData();
  }
  productlist:any=[];
  featchData(){
    this.product.getProducts().subscribe((res:any)=>{
      this.productlist=res;
      console.log(res);
    })
  }

  ADD(item:any){
    this.cart.addtocart(item);
  }

}
