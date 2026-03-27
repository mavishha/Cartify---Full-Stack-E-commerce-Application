import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Store } from '../store';
import { CommonModule } from '@angular/common';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jeans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jeans.component.html',
  styleUrl: './jeans.component.css'
})
export class JeansComponent {
  storeitems:Store[]=[];
  constructor(private service:StoreService,private route:Router){
    // this.storeitems=[
    //   {
    //     "name":"wide leg jeans",
    //     "seller":"H&M",
    //     "price":1500

    //   },
    //   {
    //     "name":"mon jeans",
    //     "seller":"H&M",
    //     "price":1000

    //   },
    //   {
    //     "name":"high waist jeans",
    //     "seller":"H&M",
    //     "price":2000

    //   }
    // ]
    this.getitems();
  }
  getitems(){
    this.service.fetchitems().subscribe(result=>{
      this.storeitems=result;
    });
  }

  buyitem(id:number){
    console.log(id);
    if(id){
        this.route.navigate(["/cart"],{queryParams:{idnum:id}});
    }
    }
    
    edititem(id:number){
      console.log(id);
      console.log("edit clicked");
      this.route.navigate(["/edit"],{queryParams:{idnum:id}});
      
    }
}
