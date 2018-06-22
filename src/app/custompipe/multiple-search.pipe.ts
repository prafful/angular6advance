import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipleSearch'
})
export class MultipleSearchPipe implements PipeTransform {

  transform(source: any, args?: any): any {

    if(args === undefined){
      return source
    }
    return source.filter(function(oneElement){
      console.log(oneElement)
      return oneElement.name.toLowerCase().includes(args.toLowerCase())
    });
  }

}
