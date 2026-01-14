import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(){
    console.log("service call");
    
  }

  getProducts(){
    return [
      {id:1,name:"Mobile",price:1000},
      {id:2,name:"Laptop",price:5000},
      {id:3,name:"Machine",price:3000},
      {id:4,name:"Watch",price:4000},
    ]
  }
}
