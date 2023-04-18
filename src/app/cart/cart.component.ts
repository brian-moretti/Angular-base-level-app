import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';

//import { ShippingComponent } from '../shipping/shipping.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService, private form: FormBuilder) {}

  //shippingTitle = this.shipping.title

  items = this.cartService.getItems();
  formSend!: boolean;

  checkOutForm = this.form.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.checkOutForm.valid) {
      this.items = this.cartService.clearCart();
      console.log('Your order has been submitted', this.checkOutForm.value);
      this.checkOutForm.reset();
      this.formSend = true;
    } else {
      alert('Please, fill the form');
    }
  }
}
