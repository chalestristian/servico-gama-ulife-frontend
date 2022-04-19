import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEvaluationModel } from 'src/app/models/userevaluation.model';
import { baseURL} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeUpdateService {

  constructor(private http: HttpClient) { }

updateevaluation(grade: UserEvaluationModel): Observable<any>{
console.log(grade)
 return this.http.put(`${baseURL}UserEvaluation/PutUserEvaluation/`, grade)
 
}

listuserevaluation(): Observable<any>{
  return this.http.get(`${baseURL}UserEvaluation/GetAllUserEvaluation`)
}

listuser(): Observable<any>{
  return this.http.get(`${baseURL}user/`)
}






}
