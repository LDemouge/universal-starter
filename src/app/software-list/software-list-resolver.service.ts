import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { SoftwaresService } from './softwares.service';
import { SoftwareList} from './software-list';

@Injectable()
export class SoftwareListResolverService implements Resolve<SoftwareList>{

  constructor(private service :SoftwaresService, private router :Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<SoftwareList> {
    let id = route.params['id'];
    console.log('resolver resolved route for id: ', id);
    return this.service.getSoftwareList(id).then((softwareList :SoftwareList) => {
      if (softwareList) {
        return softwareList;
      } else { // id not found
        this.router.navigate(['/404']);
        return null;
      }
    });
  }

}
