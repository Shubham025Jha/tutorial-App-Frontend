import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User(5,"","","",false);
 msg?:string;
  constructor(private _service:UsersService,private _router:Router ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response recieved");
      if(data.admin){
        this._router.navigate([`/tutorials/adminpage`]);
      }
      else{
        this._router.navigate([`/tutorials/userpage`]);
      }
     
    },
    error=>{
      console.log("Exception occured");
      this.msg="Bad Credentials!! Enter valid Email or Password.";
    }
    )
  }
  
  goToRegistration(){
    this._router.navigate([`/userRegistration`])
  }

}
