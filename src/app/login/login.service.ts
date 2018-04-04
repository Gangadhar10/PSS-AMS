import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class loginService {
  constructor(private http: Http) { }

  myData(filepath: string): Observable<any> {
    return this.http.get(filepath).map((res: Response) => <any>res.json());
  }
}