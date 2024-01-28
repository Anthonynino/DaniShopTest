import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductsService } from 'src/app/services/products.service';
import { AlertService } from 'src/app/services/alert.service';
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator"


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, MatPaginatorModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {
  productService = inject(ProductsService);

  alertService = inject(AlertService)

  alert = false;

  length!: number;
  data!:number
  pageSize = 4;
  currentPage = 0;
  pageIndex = 0;
  pageEvent!: PageEvent;


  
  
  constructor(){
   this.length = this.productService.products.length

     this.alertService.alert$.subscribe((res)=>{
      this.alert = true;
      setTimeout(()=>{
        this.alert = false;
      }, 1500)
    })
  }



  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }


}
