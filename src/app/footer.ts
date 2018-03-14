import { LinkToSoftwareList } from './link-to-software-list'

export class Footer {

    linksToSoftwareLists: LinkToSoftwareList[] = []
    address: string = '+ 33 7 68 81 59 99';
    phone: string = "66 rue Charles Beauhaire - 45140 Saint-Jean-de-la-Ruelle - FRANCE";
    email: string = "contact@logicieldegestion.info";
    twitter: string ='@LDemouge';
    facebook: string ='@LDemouge';
    github: string ='@LDemouge';
    google: string ='@LDemouge';

    

    registerLinkToSoftwareList(link :LinkToSoftwareList) :void {
        this.linksToSoftwareLists.push(link)

    }

    initializeLinksToSoftwareLists(list :any[]) :void{
        for(let item of list)
        {
            this.registerLinkToSoftwareList(new LinkToSoftwareList(item.title, item.url))
        }


    }
}
