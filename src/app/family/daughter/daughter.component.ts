import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from "../../myservice/service-one.service";


@Component({
  selector: 'cts-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.css']
})
export class DaughterComponent implements OnInit {

  constructor(private localservice2:ServiceOneService) { 
    console.log(localservice2.friends)
    localservice2.friends.push("dola")

  }

  ngOnInit() {
  }

}
