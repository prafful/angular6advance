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
import { JsonPipeComponent } from "./multiplesearch/json-pipe/json-pipe.component";
import { RemoteServiceComponent } from "./remote/remote-service/remote-service.component";
import { RemoteServiceDataComponent } from "./remote/remote-service-data/remote-service-data.component";

import { UsedirectiveComponent } from "./customdirective/usedirective/usedirective.component";
//import { IoparentComponent } from "./binding/ioparent/ioparent.component";

import { StringSortPipe } from '../app/custompipe/string-sort.pipe'
import { NumberSortPipe} from '../app/custompipe/number-sort.pipe'
import { AutoSearchPipe} from '../app/custompipe/auto-search.pipe'
import { MultipleSearchPipe} from '../app/custompipe/multiple-search.pipe'
import {CustombgDirective} from "./mydirective/custombg.directive"

import { ServiceOneService } from "./myservice/service-one.service";
import { IoparentComponent } from "./binding/ioparent/ioparent.component";
import { IochildComponent } from "./binding/iochild/iochild.component";


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
    },{
      path:'jsonpipe',
      component:JsonPipeComponent
    },{
      path:'customdirective',
      component:UsedirectiveComponent
    },{
        path:'remoteapi',
        component:RemoteServiceComponent
    },{
      path:'remoteapi/:id',
      component:RemoteServiceDataComponent
    },{
      path:'iobinding',
      component:IoparentComponent
    },{
      path:'**',
      component:PagenotfoundComponent
    }
  ]