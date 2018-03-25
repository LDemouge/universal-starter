import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Category} from './category';
import { categories } from './mock.categories';
import {Item} from './item/item';
 

@Injectable()
export class CategoryService {

  constructor() { }

  load(url): Observable<Category>{
    console.log(url);

    let category = categories.find(response => response.url === url);

    const items: Item[] = category.softwares;


    return of(new Category(
      category.id, 
      category.url,
      'Logiciel de gestion '+category.title,
      'Logiciel de gestion '+category.title,
      'Logiciel de gestion '+category.title,
      category.h2,
      items));

  }
}
