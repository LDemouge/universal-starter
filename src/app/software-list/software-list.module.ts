import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { SoftwareListComponent } from './software-list.component';
import { SoftwareListRoutingModule } from './software-list-routing.module';
import { StrippedHtmlPipe} from './stripped-html.pipe';
import { FeatureComponent } from './feature/feature.component';
//import { ExportAllToJsonComponent } from './export-all-to-json/export-all-to-json.component';
//import { HeroDetailComponent }  from './hero-detail.component';
//import { HeroService } from './hero.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //NgbModule,
    SoftwareListRoutingModule
  ],
  declarations: [
    SoftwareListComponent,
    StrippedHtmlPipe,
    FeatureComponent,
    //ExportAllToJsonComponent
  ],
  //providers: [ HeroService ]
})
export class SoftwareListModule {}