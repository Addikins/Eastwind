import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  
  public products: Product[];

  constructor(http: HttpClient, private router: Router, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'api/Products').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  public click(product: Product) {
    this.router.navigateByUrl('product/' + product.id);
  }
}
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
