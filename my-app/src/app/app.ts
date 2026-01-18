import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatButtonModule,MatDividerModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  
}


