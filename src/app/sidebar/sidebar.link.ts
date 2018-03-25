export class SidebarLink {
    href: string;
    alt: string;
    text: string;

    constructor(linkText, url) {
        this.text = 'logiciel de gestion ' + linkText;
        this.href = url;
        this.alt = 'Comparez et trouvez le meilleur ' + this.text + ' sur LogicielDeGestion.info';
    }
}
