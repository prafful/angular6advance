import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  friends =["ola", "mola", "gola"]

  serviceFunctionOne(){
    console.log("Function one in service")
  }

  constructor() { }
}
