import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from "../../myservice/service-one.service";


@Component({
  selector: 'cts-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  constructor(private localservice1:ServiceOneService) {
    console.log(localservice1.friends)
    localservice1.serviceFunctionOne()
    localservice1.friends.push("bhola")
    console.log(localservice1.friends)
   }

  ngOnInit() {
  }

}
