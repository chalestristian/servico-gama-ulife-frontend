import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { } 

  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(baseURL + endPoint,  this.headerRequest());
  };

  post<T>(data: any, endPoint: string): Observable<T> {
    return this.http.post<T>(baseURL + endPoint, data,  this.headerRequest());
  };

  put<T>(data: any, endPoint: string): Observable<T> {
    return this.http.put<T>(baseURL + endPoint, data,  this.headerRequest());
  };

  delete<T>(endPoint: string): Observable<T> {
    return this.http.delete<T>(baseURL + endPoint, this.headerRequest());
  };

  headerRequest(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.cookieService.get("token")
      })
    }
  }
}
