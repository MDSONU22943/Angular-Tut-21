import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  productData:any=signal("")
  constructor(private productService: ProductService){}
  // ngOnInit(){
  //   let data = this.productService.getProducts()
  //   console.log(data);
  //   this.productData.set(data)
    
  // }

  loadData(){
    let data = this.productService.getProducts()
    console.log(data);
    this.productData.set(data)
  }
}


