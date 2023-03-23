import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AvailableProduct } from './product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { };

    getAvailableProducts() {
        return this.http.get<AvailableProduct[]>(environment.apiUrl + '/warehouse/availableProducts')
    }

    sellProduct(productId: number) {
        return this.http.delete(environment.apiUrl + `/warehouse/product/sell/${productId}`);
    }
}


