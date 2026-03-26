import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  idvalue:number=0;
  constructor(private route:ActivatedRoute){
   this.route.queryParams.subscribe(
    par=>{this.idvalue=par['idnum'];
          console.log("this is the id ",par['idnum']);
    }
  )
}

}
