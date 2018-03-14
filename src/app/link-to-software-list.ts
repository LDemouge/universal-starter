export class LinkToSoftwareList {
    linkText: string
    url: string
    title : string

    constructor(linkText, url){
        this.linkText='logiciel de gestion '+linkText
        this.url = url
        this.title = "Comparez et trouvez le meilleur "+this.linkText+"! "
    }
}
