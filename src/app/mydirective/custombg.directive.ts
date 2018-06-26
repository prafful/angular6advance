import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[custombg]'
})
export class CustombgDirective {

  constructor(private el:ElementRef) { 
      
      el.nativeElement.style.color= "blue"
      el.nativeElement.style.backgroundColor = "pink"
      el.nativeElement.style.fontSize = "50px"
  }

}
