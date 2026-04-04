import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
userdet:User={
  email:'',
  password:''
}
constructor(private serv:StoreService,private route:Router){

}
login(){
  this.serv.userdetailsAuth(this.userdet).subscribe(
    (res) => {
        console.log("Login success", res);
        this.userdet={
            email:'',
            password:''
        }
      },
      (err) => {
        console.log("Login failed");
        this.userdet={
            email:'',
            password:''
        }
      }
  );
}

register(){

  this.route.navigate(["/register"]);
}


}
