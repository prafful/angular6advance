import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSort'
})
export class StringSortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  if(args === 'dsc'){
    return value.sort().reverse()
  }
  if(args === 'asc'){
    return value.sort();
  }

  return value.sort();

    
  }

}
