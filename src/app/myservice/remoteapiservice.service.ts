import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteapiserviceService {

  constructor(private httpClient:HttpClient) { }

  fetchRemoteData(){
    return this.httpClient.get("http://localhost:5555/users")
  }
}
