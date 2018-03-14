import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import {MatMenuModule} from '@angular/material/menu';
// import {MatButtonModule} from '@angular/material/button';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatIconModule} from '@angular/material/icon';
// import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { HomeComponent } from './home/home.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // HomeComponent,
    // NavbarComponent,
    // FooterComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full'},
      //{ path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
      // { path: 'list', loadChildren: './list/list.module#ListModule'}
      
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // BrowserAnimationsModule,
    // MatMenuModule,
    // MatIconModule,
    // MatButtonModule,
    // // FlexLayoutModule,
    // MatToolbarModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
