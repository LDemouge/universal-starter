import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpModule } from '@angular/http';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ListComponent, pathMatch: 'full'}
    ]),
    MatCardModule,
    MatButtonModule,
    HttpModule,
    // FlexLayoutModule
    
  ],
  declarations: [ListComponent]
})
export class ListModule { }
