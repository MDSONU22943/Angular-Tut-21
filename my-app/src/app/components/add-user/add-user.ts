import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { users } from '../../services/user-data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  constructor(private userService:UserService, private router:Router){}
  name=new FormControl('')
  email=new FormControl('')
  age=new FormControl('')

  addUser(){
    let name=this.name.value
    let email=this.email.value
    let age=this.age.value
    console.log(name,age,email);
    if(name && age && email){
      let data:users = {
        name:name,
        age:Number(age),
        email:email
      }
      this.userService.saveUser(data).subscribe((res)=>{
        if(res){
          this.router.navigate(['/'])
        }
      })
    }
    
  }
}
