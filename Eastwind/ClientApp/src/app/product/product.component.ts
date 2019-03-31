import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id: number;
  public product: Product;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.http.get<Product>(this.baseUrl + 'api/Products/' + this.id).subscribe(result => {
      this.product = result;
      console.log(result);
    }, error => console.error(error));
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}
