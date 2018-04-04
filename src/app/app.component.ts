import { Component, OnInit } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  AppUrl: any;
  loginreturn: boolean;
  public constructor(private titleService: Title) {

  };
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
