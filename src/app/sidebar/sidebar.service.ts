import { Injectable } from '@angular/core';
import { SidebarLink } from './sidebar.link';
import { LINKS } from './mock.sidebar-links';

@Injectable()
export class SidebarService {

  constructor() { }

  getSidebarLinks(): SidebarLink[] {

    const links = [];

    for (const link of LINKS) {

      links.push(new SidebarLink(link.title, link.url));

    }

    return links;

  }

}
