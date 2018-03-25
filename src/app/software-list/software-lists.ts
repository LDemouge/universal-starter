import {SoftwareList} from './software-list';

export class SoftwareLists {
    private lists: SoftwareList[]=[]
    get() :SoftwareList[]
    {
        return this.lists;
    }
    addList(list: SoftwareList) :void
    {
        this.lists.push(list);
    }
}
