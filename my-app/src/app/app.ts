import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  isLogin = signal(true)

  users = signal(["anil", "sam", "peter", "bruce"])
  pColor="red"

}
