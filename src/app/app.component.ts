import { Component } from '@angular/core';

@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponentNew {
  title = 'Angular 6';
  message = "This is fun"
  fname ="Prafful"
  lname = "Daga"
  sayHello1 = function(){
    console.log("Hello from 1")
  }

  sayHello2(){
    console.log("Hello from 2")
  }


}
