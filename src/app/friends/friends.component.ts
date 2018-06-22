import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {

  friendName = "Name of Your Friend"

 friends:string[] = ['mohan', 'sundeep', 'gita', 'meeta', 'deepa', 'manish', 'sohan']
 
 scores:number[] = [10,5,4,78,98,55,22,12,36]

 location = [
   {
     city:"chennai",
     code:"044"
   },{
    city:"delhi",
    code:"011"
  },{
    city:"mumbai",
    code:"022"
  },{
    city:"jaipur",
    code:"0141"
  }
 ]

 



 salary = 5000

 currentDate = new Date()

  constructor() { }

  ngOnInit() {

  }

  addFriend = function(){
    console.log(this.friendName)
    this.friends.push(this.friendName)
    this.friendName= ""
  }
  removeFriend = function(received){
    this.friends.splice(received, 1)
  }

}
//component life cycle