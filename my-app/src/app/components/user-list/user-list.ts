import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { users } from '../../services/user-data-type';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [TitleCasePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  usersData = signal<users[] | undefined>(undefined)
  constructor(private userService:UserService){}
  ngOnInit(){
      this.getUser()
  }

  getUser(){
    this.userService.getUsers().subscribe((data)=>{
      console.log(data);
      this.usersData.set(data)
      
    })
  }

  deleteUser(id:number | undefined){
    console.log(id);
    if(id){
      this.userService.deleteUser(id).subscribe((res)=>{
      this.getUser()
      })
    }
    
  }
}
