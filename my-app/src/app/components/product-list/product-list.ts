import { Component,signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../services/productDataType';
import { Products } from '../../services/products';


@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productData = signal<Product[] | undefined>(undefined)
  constructor(private productService:Products){}

  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      // console.log(data.products);
      this.productData.set(data.products)
      
    })
  }
}
