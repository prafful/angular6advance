import { Routes } from "@angular/router";

import { AppComponentNew } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { NuclearfamilyComponent } from './family/nuclearfamily/nuclearfamily.component';
import { PagenotfoundComponent } from './notfound/pagenotfound/pagenotfound.component';
import { FriendsComponent } from './friends/friends.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';



export const myroutes:Routes = [
  
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
  ]