import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/pages/cart/cart.service';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartService = inject(CartService)

  removeProduct(index: number){
    this.cartService.removeProduct(index)
  }

  sellProducts(){
    this.cartService.sellProducts()
  }
}
