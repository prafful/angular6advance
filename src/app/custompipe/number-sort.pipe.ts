import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSort'
})
export class NumberSortPipe implements PipeTransform {

  transform(source: any, argument?: any): any {
    
    if(argument === "asc"){
      return  source.sort(sortNumbers)
    }
    if(argument === "dsc"){
      return  source.sort(sortNumbers).reverse()
    }
    
    return  source.sort(sortNumbers)

    function sortNumbers(a, b){
      return a-b
    }

  }

}
