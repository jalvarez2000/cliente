export class Product {
    id: number = 0;
    name: string = '';
}

export class AvailableProduct {
    product: Product = new Product();
    quantity: number = 0;
}