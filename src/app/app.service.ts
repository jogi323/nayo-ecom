import { Injectable } from '@angular/core';
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  url:any;
  data:any;
  constructor(private http:Http) { }
  getData(){
    var headers = new Headers;
    headers.append('Content-Type','application/json; charset=utf-8');
    return this.http.get(this.url,{headers:headers}).map(res =>{
      return res.json()
    });
  }
  postData(){
    var headers = new Headers;
    headers.append('Content-Type','application/json; charset=utf-8');
    return this.http.post(this.url,this.data,{headers:headers}).map(res =>{ 
      console.log(res.json());
      return res.json()});
  }
}
