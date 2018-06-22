import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoSearch'
})
export class AutoSearchPipe implements PipeTransform {

  transform(source: any, args?: any): any {

    if(args === undefined){
      return source
    }
    return source.filter(function(oneElement){
      console.log(oneElement)
      return oneElement.toLowerCase().includes(args.toLowerCase())
    });
  }

}
