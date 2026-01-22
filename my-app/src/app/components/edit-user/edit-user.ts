import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  name=new FormControl('')
  age=new FormControl('')
  email=new FormControl('')

  constructor(private activeRoute:ActivatedRoute, private userService:UserService, private router:Router){}

  ngOnInit(){
    let id = this.activeRoute.snapshot.paramMap.get('id')
    console.log(id);
    if(id){
      this.userService.getUser(Number(id)).subscribe((data)=>{
        console.log(data);
        this.name.setValue(data.name)
      this.age.setValue(String(data.age))
      this.email.setValue(data.email)
      })
      
    }
    
  }
  editUser(){
    let name = this.name.value
    let age = this.age.value
    let email = this.email.value
    let id = this.activeRoute.snapshot.paramMap.get('id')
    if(name && age && email && id){
      let data = {
        name:name,
        age:Number(age),
        email:email,
        
      }
      this.userService.editUser(data,id).subscribe((item)=>{
        this.router.navigate(['/'])
      })
    }
  }
}
