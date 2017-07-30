import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<string>, field: string, direction: 'asc' | 'desc', search: string, args?: string): Array<string> {
    if (field === null || direction === null) {
      if (!search) {
        return array;
      }
      return array.filter((elem: any) => {
        return elem.firstname.includes(search) || elem.lastname.includes(search) || elem.email.includes(search);
      });
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        if (direction === 'asc') {
          return -1;
        } else {
          return 1;
        }
      } else if (a[field] > b[field]) {
        if (direction === 'asc') {
          return 1;
        } else {
          return -1;
        }
      } else {
        return 0;
      }
    });
    console.log(array, search);
    if (!search) {
      return array;
    }
    return array.filter((elem: any) => {
      return elem.firstname.includes(search) || elem.lastname.includes(search) || elem.email.includes(search);
    });
  }

}
