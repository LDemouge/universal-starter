import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  //selector: 'app-list',
  templateUrl: `./list.component.html`,
  styles: []
})
export class ListComponent implements OnInit {

  items: Array<any>;

  constructor(private http:Http) {

    this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .map(response => response.json())
      .subscribe(res => this.items = res);
   }

  ngOnInit() {
  }

}
