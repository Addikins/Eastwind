import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  public id: number;
  public supplier: Supplier;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.http.get<Supplier>(this.baseUrl + 'api/Suppliers/' + this.id).subscribe(result => {
      this.supplier = result;
      console.log(result);
    }, error => console.error(error));
  }
}

interface Supplier {
  id: number;
  name: string;
}
