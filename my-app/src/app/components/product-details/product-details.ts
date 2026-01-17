import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';
import { Product } from '../../services/productDataType';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  productData = signal<Product | undefined>(undefined)
    constructor(private route:ActivatedRoute, private product: Products){}

    ngOnInit(){
      let productId=this.route.snapshot.paramMap.get('id')
      // console.log(productId);
      this.product.getProducts().subscribe((data)=>{
        // console.log(data.products);
        data.products.filter((item)=>{
          if(item.id.toString()==productId){
            console.log(item);
            this.productData.set(item)
          }
        })
      })
      
    }
}
