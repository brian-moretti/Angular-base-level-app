import { Component } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title: string = 'Products';
 // products = products;
 products = [...products];

  share(){
    alert("Product shared")
  }

  onNotify(){
    alert("Notify incoming to your inbox")
  }
}
