import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  msg?:string;
  user=new User(1,"","","",false); 
  pCheck?:string;
  constructor(private _service:UsersService , private _router:Router) { } 

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerNewUser(this.user).subscribe(
      data=>{
        console.log("User Registered");
        this.msg="User Registered!! Please head towards Login Page";

      },
      error=>{
        console.log(error);
        console.log("Exception Occured");
        this.msg="User Exsist!! Please head to Login page";
      }

    )
  }
  

}
