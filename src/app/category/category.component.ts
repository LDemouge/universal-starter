import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { Location } from '@angular/common';

import { CategoryService } from './category.service';
import { Category} from './category'

@Component({
  // selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  category: Category;
  // private items = [];

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title
  ) {}



  ngOnInit() {
        this.route.params.subscribe(params => {
          const url = params['id'];
          this.service.load(url).subscribe(category => {
                this.category = category;
                this.titleService.setTitle(this.category.title); 
                console.log(this.category);
              });
        });
        

  }

}
