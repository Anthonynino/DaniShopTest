import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Products } from '../interfaces/product';
import {toSignal} from '@angular/core/rxjs-interop'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) { }


  products = toSignal<Products[]>(this.http.get<Products[]>('https://fakestoreapi.com/products'))

  getProductId(id: number | string):Observable<Products>{
    return this.http.get<Products>(`https://fakestoreapi.com/products/${id}`)
  }
}
