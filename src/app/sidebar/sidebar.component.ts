import { Component, OnInit } from '@angular/core';
import {SidebarLink} from './sidebar.link';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  providers: [SidebarService],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  links: SidebarLink[];

  constructor(service: SidebarService) {

      this.links = service.getSidebarLinks();

   }

  ngOnInit() {
  }

}
