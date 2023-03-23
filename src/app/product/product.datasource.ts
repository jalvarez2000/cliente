import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs";
import { AvailableProduct } from "./product.model";
import { ProductService } from "./product.service";

export class ProductDataSource extends DataSource<any> {
    constructor(private productService: ProductService) {
        super();
    }

    connect(): Observable<AvailableProduct[]> {
        return this.productService.getAvailableProducts();
    }

    disconnect(): void { /* TODO document why this method 'disconnect' is empty */ }
}