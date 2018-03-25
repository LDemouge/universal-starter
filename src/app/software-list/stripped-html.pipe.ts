import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'strippedHtml'})
export class StrippedHtmlPipe implements PipeTransform {
    transform(html: string) : string 
    {
        var div = document.createElement("div");
        div.innerHTML = html;
        var text = div.textContent || div.innerText || "";
        return text
    }

}