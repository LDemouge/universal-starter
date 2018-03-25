import { Component, OnInit, Input } from '@angular/core';
import { Software } from '../software';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() 
  software: Software;

  @Input()
  private index: number;

  isEven: boolean;

  imgSrc: string
  
  constructor() { }

  ngOnInit() {
    
    this.isEven = (this.index % 2) == 0;
    console.log(this.isEven)
    this.imgSrc = this.getImageSrc()
    console.log(this.imgSrc)
  }

  getImageSrc()
  {
    return './assets/'+this.software.imageUrl+".png"
  }

  

 

  

}
