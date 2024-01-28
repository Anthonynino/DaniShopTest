import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from 'src/app/interfaces/product';
import { CartService } from 'src/app/pages/cart/cart.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({required: true}) product!: Products;

   cartService = inject(CartService)

   alertService = inject(AlertService)

   router = inject(Router)

   lightBox: boolean = false;
  
   constructor(){
   }

  addProduct(product: Products){
    this.cartService.addProduct(product)
    this.alertService.showAlert()
  }

  navigate(id:number){
    this.router.navigate(['/details/',id])
  }
  gridImgHandler(){
    this.lightBox = true;
  }

  closeHandler(){
    this.lightBox = false;
  }
}
