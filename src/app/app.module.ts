import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IndexComponent } from './modules/index/index.component';
import { LoginComponent } from './modules/index/login/login.component';
import { NewAccountComponent } from './modules/index/new-account/new-account.component';
import { RecentLogComponent } from './modules/index/recent-log/recent-log.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NewAccountComponent,
    RecentLogComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
