import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
userdet:User={
  username:'',
  password:''
}
constructor(private serv:StoreService){

}
login(){
  this.serv.userdetailsAuth(this.userdet).subscribe(
    (res) => {
        console.log("Login success", res);
      },
      (err) => {
        console.log("Login failed");
      }
  );
}



}
