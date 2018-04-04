import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class SharedService {
  data: any;
  constructor(private http: Http) { }

  setData(jsonData){
    this.data = jsonData;
  }

  getData(): any{
      return this.data;
  }
  
    
 }