import { Component, OnInit } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions, } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

// import { SharedService } from '../shared/sharedService';
// import { AmsComponent } from '../ams/ams.component'
// import { loginService } from './login.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  //loginForm: FormGroup;
  AppUrl: any;
  loginreturn: boolean;
  isLogin: boolean = false;
  applications = [];
  user = [];

  constructor(public http: Http,
    // private sharedService: SharedService,
    public router: Router,
    private location: Location,
    // private logincall: loginService,
    private titleService: Title) {
    this.titleService.setTitle('PSS-login');
  }


  Login(UserId: string, Password: string) {
    if (UserId == null || UserId == undefined || UserId == "" || Password == null || Password == undefined || Password == "") {
      alert('Enter User name and Password..!!');
      this.router.navigate(['/login']);
    }
    else {
      this.isLogin= true;
      this.router.navigate(['/ams']);
      // this.logincall.myData("./assets/loginresult.json").subscribe(object => {
      //   if(object.success == true){
      //     // this.sharedService.setData(object.user);
      //     // this.sharedService.setData(object.applications);
      //     this.sharedService.setData(object);
      //     this.router.navigate(['/ams']);
      //   }
      // })
    }
  };

  ngOnInit() {
    // this.loginForm = new FormGroup({
    // });
  }

}
