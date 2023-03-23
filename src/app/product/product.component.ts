import { Component } from '@angular/core';
import { ProductDataSource } from './product.datasource';
import { AvailableProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'available-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  dataSource = new ProductDataSource(this.productService);
  displayedColumns: string[] = ['name', 'quantity', 'sell'];
  Component: any;

  constructor(private productService: ProductService) { };

  sellItem(availableProduct: AvailableProduct) {
    this.productService.sellProduct(availableProduct.product.id).subscribe(
      response => {
        this.dataSource = new ProductDataSource(this.productService);
      }
    );
  }
}
