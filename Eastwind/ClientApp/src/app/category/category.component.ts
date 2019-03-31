import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
public id: number;
public category: Category;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.http.get<Category>(this.baseUrl + 'api/Categories/' + this.id).subscribe(result => {
    this.category = result;
  console.log(result);
  }, error => console.error(error));
  }
  
}
  interface Category {
    id: number;
    name: string;
  }

