import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'home',
  templateUrl: './home.component.html' 


})
export class HomeComponent implements OnInit {
  public message: string;
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  ngOnInit() {
    this.message = 'Hello';
    
  }

  
    
    
  
}