import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//defined services
import { JwtService } from './jwt-service.service';

@Injectable()
export class ApiService {

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }

  constructor(
    private http:Http,
    private jwtService:JwtService
  ) { }


  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
    .map((res: Response) => res.json())
    .catch((error: Response) => {
      return Observable.throw(error.json());
    });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .map((res: Response) => res.json())
    .catch((error: Response) => {
      return Observable.throw(error.json());
    });
  }

  post(path: string, body: Object = {}, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders(), search:params }
    )
    .map((res: Response) => res.json())
    .catch((error: Response) => {
      return Observable.throw(error.json());
    });
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .map((res: Response) => res.json())
    .catch((error: Response) => {
      return Observable.throw(error.json());
    });
  }

}
