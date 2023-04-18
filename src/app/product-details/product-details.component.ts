import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../product';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product!: Product

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap
    const productId = Number(routerParams.get('productId')) //valore === in routing.module

    this.product = products.find(product => product.id === productId)!
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
    alert("Product added to cart")
  }
}
