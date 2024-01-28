import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interfaces/product';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  id!: string;
  product$!: Observable<Products>
  
  productService = inject(ProductsService)
  route = inject(ActivatedRoute)

  constructor(){
    this.id = this.route.snapshot.paramMap.get('id') || '';

   
    this.product$ = this.productService.getProductId(this.id)
  }

}
