import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title="code step by step"
  name = signal('')

  amount = 10000
  date ="24-8-2025"
  mobile="samsung"

  user = signal({name:'anil', age:29, email:"code@test.com"})
}
