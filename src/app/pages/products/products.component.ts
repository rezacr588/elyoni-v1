// products.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductCategory } from '../categories/categories.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category: ProductCategory | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private categoriesComponent: CategoriesComponent
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryType = params['categoryType'];
      this.category = this.categoriesComponent.categories.find(
        c => c.type === categoryType
      );
    });
  }
}