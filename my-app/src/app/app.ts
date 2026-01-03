import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';


@Component({
  selector: 'app-root',
  imports: [CommonModule, TrimTextPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title=signal("code step by step")
  
}
