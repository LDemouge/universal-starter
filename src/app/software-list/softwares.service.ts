import { Injectable } from '@angular/core';

import { SoftwareLists } from './software-lists';
import { SoftwareList } from './software-list';
//import { SOFTWARELISTS } from './mock.software-lists';
import { SOFTWARELISTS } from './data'
import { Software } from './software';
//import { SOFTWARES } from './mock.softwares';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SoftwaresService {

  constructor(private database:AngularFireDatabase){}

  exportAll(){}


  /**
   * getSoftwareList(id: string): Promise<SoftwareList> {

    return Promise.resolve(this.database.object('/softwareLists/'+id));


  }

**/

 

  getSoftwareList(id: string): Promise<SoftwareList> {
    
    
    let allLists = SOFTWARELISTS;
    //let allItems = SOFTWARES;

    let jsonList = allLists.find(list => list.url == id);

    let list = new SoftwareList(jsonList.id, jsonList.url, jsonList.title, jsonList.h2);

    //console.log("listId: "+list.id);
    //console.log(list);
    

    
    for (let item of jsonList.softwares) {
      if( item.listId == list.id) list.addSoftware(item);
    }
   



    return  Promise.resolve(list);
    //return SOFTWARELISTS[id];
    
    /** 
     * 
     * return {
      id: 1,
		  url: "association",
		  title: "association",
		  h2: "Pour la gestion de votre association, LogicielDeGestion.info a sélectionné pour vous les meilleurs logiciels de gestion, en tenant compte des différents besoins spécifiques liés à la gestion d'une association."


 **/   };

     
    
  

  
}