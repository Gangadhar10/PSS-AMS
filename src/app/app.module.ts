
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router'
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { AmsModule  } from './ams/ams.module';
import { LoginModule } from '../app/login/login.module';
// import { SharedModule } from '../app/shared/shared.module'
 import{ AmshomeModule } from './ams/amshome/amshome.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    LoginModule,
    AmsModule,
    AmshomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    // SharedModule.forRoot(),
  ],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule { }
