import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cts-remote-service-data',
  templateUrl: './remote-service-data.component.html',
  styleUrls: ['./remote-service-data.component.css']
})
export class RemoteServiceDataComponent implements OnInit {

  constructor(private route:ActivatedRoute) {

    this.route.params.subscribe(p=>console.log(p))

   }

  ngOnInit() {
  }

}
