import {Item} from './item/item';

export class Category {
    id;
    url;
    meta;
    title;
    h1;
    h2;
    items:Item[];

    constructor(id:number, url:string, meta, title, h1:string, h2:string, items:Item[]) {
        this.id = id;
        this.url = url;
        this.meta = meta;
        this.title = title;
        this.h1 = h1;
        this.h2 = h2;
        this.items = items;
    }
}