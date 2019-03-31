import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(http: HttpClient, private router: Router, @Inject('BASE_URL') baseUrl: string) {
    http.get<Category[]>(baseUrl + 'api/Categories').subscribe(result => {
      this.categories = result;
    }, error => console.error(error));
  }
  ngOnInit() {

  }
  public click(category: Category) {
    this.router.navigateByUrl('category/' + category.id);
  }
}
interface Category {
  id: number;
  name: string;
}
