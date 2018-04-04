import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DataTableModule, PaginatorModule, DropdownModule, CalendarModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router'
import { headerComponent } from '../shared/header.component'
import { footerComponent } from '../shared/footer.component'
import { AmsComponent } from '../ams/ams.component';
import { EditplantComponentModule } from './editplant/editplant.module';
import { SysteminformationComponent } from './systeminformation/systeminformation.component';
import { HelpComponent } from './help/help.component';
// import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    AmsComponent,
    footerComponent,
    headerComponent,
    SysteminformationComponent,
    HelpComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    EditplantComponentModule
    // DataTableModule,
    // DropdownModule, BrowserAnimationsModule, CalendarModule, ButtonModule, DialogModule

  ],
  //   providers: [loginService, SharedService],

  exports: [
    AmsComponent,
    footerComponent,
    headerComponent
  ]
})
export class AmsModule { }
