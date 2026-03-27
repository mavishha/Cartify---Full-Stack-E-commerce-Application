import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { Store } from '../store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  idvalue:number=0;
  item:Store={
    id:0,
    name:'',
    seller:'',
    price:0
  };
  constructor(private route:ActivatedRoute,private serv:StoreService){
   this.route.queryParams.subscribe(
    par=>{this.idvalue=par['idnum'];
          console.log("this is the id ",par['idnum']);
          this.cartitem();
    }
  );
  
}

cartitem(){
  this.serv.oneitem(this.idvalue).subscribe(res=>{
    console.log("this cart is working");
    this.item=res;
  })
}

}
