import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { Store } from '../store';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  idvaluw:number=0;
  item:Store={
    id:0,
    name:"",
    price:0,
    seller:""
  }
  text:boolean=false;
constructor(private route:ActivatedRoute,private serve:StoreService){
  this.route.queryParams.subscribe(par=>{
    this.idvaluw=par['idnum'];
    this.store();
  });
  
}

  store(){
    this.serve.oneitem(this.idvaluw).subscribe(res=>{
      this.item=res;
    })
  }
  edit(){
    this.serve.edit(this.idvaluw,this.item).subscribe(res=>{
      console.log("edited");
      this.text=true;
    })
  }
}
