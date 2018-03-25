import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';


import { SoftwareList} from './software-list';


@Component({
  
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css'],
 
})


export class SoftwareListComponent implements OnInit {

  softwareList?: SoftwareList;


  constructor(
      private route: ActivatedRoute
      
        ) 
      
      {  }


  ngOnInit() :void{

      this.route.data
        .subscribe(
          (data: { softwareList: SoftwareList })  => { this.softwareList = data.softwareList; });     
     
      };
 

}
