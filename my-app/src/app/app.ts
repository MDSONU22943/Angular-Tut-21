import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // userName = signal("anil sidhu")
  userName = signal(['anil', 'peter','sam','bruce'])
  newUser = signal('')
  selectUserName = signal('')


  addNewUser(){
    this.userName.update((data)=> ([...data, this.newUser()]))
  }

  selectedUser(name:string | undefined){
    // console.log(name)
    this.selectUserName.set(name || 'no user selected')
  }
  deleteUser(name:string){
    // console.log(name)
    this.userName.update((data)=> data.filter((user)=> user !== name))
  }

}
