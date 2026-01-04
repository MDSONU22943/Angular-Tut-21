import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { Header } from './components/header/header';


@Component({
  selector: 'app-root',
  imports: [CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
  
}
