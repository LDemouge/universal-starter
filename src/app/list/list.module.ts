import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ListComponent } from './list/list.component';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ListComponent, pathMatch: 'full'}
    ])
    
  ],
  declarations: [ListComponent]
})
export class ListModule { }
