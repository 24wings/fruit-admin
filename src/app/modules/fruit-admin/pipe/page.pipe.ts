import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(value: any[], page?: number): any {
    console.log(value, page);
    return value.slice(page * 10, 10)
  }

}
