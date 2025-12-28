import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // name=signal("Anil")
  // age=20

  userData = signal({
    name:"anil sidhu",
    age:25,
    email:"anil@test.com"
  })

  updateUserData(key:string, val:string){
    this.userData.update((item)=>({...item, name:val}))
  }

}
