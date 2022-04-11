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
  ) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get("token")
    })
  };

  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(baseURL + endPoint, this.httpOptions
    );
  };

  post<T>(data: any, endPoint: string): Observable<T> {
    return this.http.post<T>(baseURL + endPoint, data, this.httpOptions);
  };

  put<T>(data: any, endPoint: string): Observable<T> {
    return this.http.put<T>(baseURL + endPoint, data, this.httpOptions);
  };

  delete<T>(endPoint: string): Observable<T> {
    return this.http.delete<T>(baseURL + endPoint, this.httpOptions);
  };
}
