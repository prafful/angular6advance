import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate,  } from "@angular/animations";

@Component({
  selector: 'cts-nuclearfamily',
  templateUrl: './nuclearfamily.component.html',
  styleUrls: ['./nuclearfamily.component.css'],
  animations:[
    trigger("growUpAnimation",[
      state("kid",style({
        color:'red',
        transform:'scale(1)'
      })),
      state("elder",style({
        color:'blue',
        transform:'scale(2)'
      })),
      transition('kid <=> elder', animate('1000ms ease-out'))
    ])
  ]
})
export class NuclearfamilyComponent implements OnInit {

  myState:string = 'kid'

  constructor() { }

  ngOnInit() {
  }

  startAnimation(){
    console.log("Animation will start!!!")
    this.myState = this.myState == "elder" ? 'kid':'elder'
    console.log(this.myState)
  }


}
