import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-usedirective',
  templateUrl: './usedirective.component.html',
  styleUrls: ['./usedirective.component.css']
})
export class UsedirectiveComponent implements OnInit {

  //friends = ["mohan", "sohan", "gopal"]
  friends = []
  scores =0
  constructor() { }

  ngOnInit() {
  }

}
