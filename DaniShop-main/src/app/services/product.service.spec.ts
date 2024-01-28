import { TestBed } from "@angular/core/testing";
import { ProductsService } from "./products.service";
import {HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing"
import { Products } from "../interfaces/product";

const productId = 1;
const product:Products = {
    "id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}
}
const routeBase = "https://fakestoreapi.com"


fdescribe('ProductService', () => {
    let service: ProductsService;
    let httpTestingController: HttpTestingController;
    
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      service = TestBed.inject(ProductsService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
    
    it('should behave...', () => {
        expect(service).toBeTruthy()
    });

    describe('GetProductId', () => {
        it('should call getProductsId', () => {
            service.getProductId(productId).subscribe(data => {
                expect(data).toEqual(product)
            });
            
        const req = httpTestingController.expectOne(
        `${routeBase}/products/1` ,
        );
        expect(req.request.method).toEqual('GET');
  
        req.flush(product);
        httpTestingController.verify();
        }); 
    });
})