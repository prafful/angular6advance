import { Component, OnInit } from '@angular/core';
import { RemoteapiserviceService } from "../../myservice/remoteapiservice.service";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'cts-remote-service',
  templateUrl: './remote-service.component.html',
  styleUrls: ['./remote-service.component.css']
})
export class RemoteServiceComponent implements OnInit {

  users

  constructor(private remote:RemoteapiserviceService) {

   }

  ngOnInit() {
    this.getRemoteData()
  }

  getRemoteData(){
    this.remote.fetchRemoteData().subscribe(
      (res) =>{
                console.log(res)
                this.users = res;
                console.log(this.users)
      },
      (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("Server Side Error")
        }else{
          console.log("Client Side Error")
        }

      }
      )
    
  }

}
