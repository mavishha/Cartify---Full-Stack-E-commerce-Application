import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.css'
})
export class AdditemComponent {

  constructor(private serv:StoreService,private route:Router){}

  item:Store={
    id:0,
    name:"",
    price:0,
    seller:""
  }
  submititem(){
    
    this.serv.additem(this.item).subscribe(result=>{
      console.log(this.item.name,this.item.seller);
      // this.item={
      //   name:"",
      //   price:0,
      //   seller:""
      // }
      this.jeansTable();
      
    });
    
    console.log("item added");
    
  }

  Onsubmit(form:any){
     if (form.invalid) {
    return; // STOP submission
    }
    this.submititem();
  }

  jeansTable(){
    this.route.navigate(['/home/women/jeans']);
  }

}
