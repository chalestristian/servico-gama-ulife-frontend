import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  
constructor(private http: HttpClient) { }


//State Management
setSession(key: string, value: any): void {
  //sessionStorage.setItem(key, JSON.stringify(value));
  localStorage.setItem(key, JSON.stringify(value));
}

getSession(key: string): any {
  if (typeof window !== 'undefined') {
      //let retrievedObject = sessionStorage.getItem(key) as string;
      this.listuser()
      let retrievedObject = localStorage.getItem(key) as string;
      return retrievedObject;
  }
}

clearSession(): void {
  localStorage.clear();
}

listuser(): Observable<any>{  
 return this.http.get(`${baseURL}user/`)
}

getuserbyid(id:any) : Observable<any>{
  return this.http.get(`${baseURL}user/`.concat(id));
}

}