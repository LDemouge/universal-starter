import {Software} from './software';

export class SoftwareList {
  
  public softwares?: Software[] = [];

  constructor(
    public id: number,
    public url: string,
    public title: string,
    public h2: string
    )
    {}


  public addSoftware(software: Software) : void {
    this.softwares.push(software);
    
  }

  
  

  
}