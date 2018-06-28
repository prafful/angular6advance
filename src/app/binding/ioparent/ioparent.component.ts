import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-ioparent',
  templateUrl: './ioparent.component.html',
  styleUrls: ['./ioparent.component.css']
})
export class IoparentComponent implements OnInit {

  parent = "Angular 7.x"

  constructor() { }

  ngOnInit() {
  }

  messageFromChild = function(fromchild){
    console.log("Some message received from parent!!!")
    console.log(fromchild)
    this.parent = fromchild
  }

}
