import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  credentials:User={
    email:'',
    password:'',
    name:'',
    role:''
  }

  constructor(private route:Router,private service:StoreService){}
  login(){
    this.route.navigate(["/login"])
  }
  register(){

    this.service.registeruser(this.credentials).subscribe(
      res=>{
        console.log("registered");
        this.credentials={
              email:'',
              password:'',
              name:'',
              role:''
        }
      }
    );
  }
}
