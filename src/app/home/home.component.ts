import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'home',
  template: `<p>{{message}} </p>
                <mat-menu #appMenu="matMenu">
                  <button mat-menu-item> Settings </button>
                  <button mat-menu-item> Help </button>
                </mat-menu>

                <button mat-button [matMenuTriggerFor]="appMenu">
                  <mat-icon>more_vert</mat-icon> Menu
                </button>
                <ul>
                  <li class="text" *ngFor="let item of items | async">
                  {{ item | json }}
                  </li>
                </ul>`


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