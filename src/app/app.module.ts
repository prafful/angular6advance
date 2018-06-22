import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";


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

import {myroutes} from './myroutes.module'

import { StringSortPipe } from '../app/custompipe/string-sort.pipe'
import { NumberSortPipe} from '../app/custompipe/number-sort.pipe'
import { AutoSearchPipe} from '../app/custompipe/auto-search.pipe'
import { MultipleSearchPipe} from '../app/custompipe/multiple-search.pipe'


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
    ColleaguesComponent,
    StringSortPipe,
    NumberSortPipe,
    AutoSearchPipe,
    JsonPipeComponent,
    MultipleSearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponentNew]
})

export class AppModuleRoot { }


