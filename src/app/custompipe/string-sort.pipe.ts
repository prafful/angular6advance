import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSort'
})
export class StringSortPipe implements PipeTransform {

  transform(source: any, args?: any): any {
  if(args === 'dsc'){
    return source.sort().reverse()
  }
  if(args === 'asc'){
    return source.sort();
  }

  return source.sort();

    
  }

}
