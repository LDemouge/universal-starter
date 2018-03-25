import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';


import { SoftwareListComponent } from './software-list.component';
import { SoftwareListResolverService} from './software-list-resolver.service';
import { SoftwaresService } from './softwares.service';
//import { ExportAllToJsonComponent } from './export-all-to-json/export-all-to-json.component';
//import {ExportResolverService} from './export-resolver.service'
//import { HeroDetailComponent }  from './hero-detail.component';


const softwaresRoutes: Routes = [
  
  { path: ':id',  
    component: SoftwareListComponent,
    resolve: { softwareList: SoftwareListResolverService}
  },
  //{ path: 'hero/:id', component: HeroDetailComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(softwaresRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SoftwareListResolverService,
    SoftwaresService,
    //ExportResolverService
  ]
})
export class SoftwareListRoutingModule { }