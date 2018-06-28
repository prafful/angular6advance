import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-iochild',
  templateUrl: './iochild.component.html',
  styleUrls: ['./iochild.component.css']
})
export class IochildComponent implements OnInit {

  @Input() toParent;

  @Output() parcelToParent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  sendBackToParent = function(received){
    console.log("sending back to parent " + received)
    console.log(received)
    this.parcelToParent.emit(received)
  }

}
 