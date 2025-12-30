import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  students = ["Anil", "sam", "peter", "vinay", "bruce"]

  studentsData = [
    {name:"Anil", age:29, email:"anil@test.com"},
    {name:"vinay", age:30, email:"anil2@test.com"},
    {name:"bruce", age:31, email:"anil3@test.com"},
    {name:"peter", age:32, email:"anil4@test.com"},
  ]

  show=true
}
