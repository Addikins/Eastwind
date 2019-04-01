import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  public suppliers: Supplier[];

  constructor(http: HttpClient, private router: Router, @Inject('BASE_URL') baseUrl: string) {
    http.get<Supplier[]>(baseUrl + 'api/Suppliers').subscribe(result => {
      this.suppliers = result;
    }, error => console.error(error));
    }
  ngOnInit() {
  
  }
 public click(supplier: Supplier) {
   this.router.navigateByUrl('supplier/' + supplier.id);
 }
}
interface Supplier {
  id: number;
  name: string;
}