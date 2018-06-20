import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponentNew } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { NuclearfamilyComponent } from './family/nuclearfamily/nuclearfamily.component';
import { PagenotfoundComponent } from './notfound/pagenotfound/pagenotfound.component';
import { FriendsComponent } from './friends/friends.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';

import {myroutes} from './myroutes.module'

/* const myroutes:Routes = [
  
  {
    path:'',
    redirectTo:'father',
    pathMatch:'full'
  },
  {
    path:'family',
    component:NuclearfamilyComponent,
    children:[
      {
        path:'father',
        component:FatherComponent
      },
      {
        path:'mother',
        component:MotherComponent
      },
      {
        path:'son',
        component:SonComponent
      },
      {
        path:'daughter',
        component:DaughterComponent
      }
    ]
  },
  {
    path:'friends',
    component:FriendsComponent
  },
  {
    path:'colleague',
    component:ColleaguesComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
] */

@NgModule({
  declarations: [
    AppComponentNew,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    FatherComponent,
    NuclearfamilyComponent,
    PagenotfoundComponent,
    FriendsComponent,
    ColleaguesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponentNew]
})

export class AppModuleRoot { }


