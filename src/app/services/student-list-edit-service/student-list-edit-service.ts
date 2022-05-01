import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from 'src/app/models/student.model';
import { UserEvaluationModel } from 'src/app/models/userevaluation.model';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentListEditService {

  constructor(private http: HttpClient) { }

  //--------LOCAL STORAGE------------------------------------------
  setSession(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getSession(key: string): any {
    if (typeof window !== 'undefined') {
      this.GetAllUser()
      let retrievedObject = localStorage.getItem(key);
      return retrievedObject
    }
  }
  clearSession(): void {
    localStorage.clear();
  }
  //----------------------------------------------------------------

  GetAllUser(): Observable<any> {
    return this.http.get(`${baseURL}user/`)
  }

  GetAllEvaluation(): Observable<any> {
    return this.http.get(`https://localhost:5001/api/Evaluation`); // TEM QUE ALTERAR A URL DE LOCAL PARA PROD
  }

  GetAllUserEvaluation(): Observable<any> {
    return this.http.get(`${baseURL}UserEvaluation/GetAllUserEvaluation/`);
  }

  GetUserById(id: any): Observable<any> {
    return this.http.get(`${baseURL}user/`.concat(id));
  }

  GetUserByRegisterId(register: any): Observable<any> {
    return this.http.get(`${baseURL}user/`.concat(register));
  }

  GetUserEvaluationById(id: any): Observable<any> {
    return this.http.get(`${baseURL}UserEvaluation/GetUserEvaluationByUser/`.concat(id) + "?typeUser=1");
  }

  UpdateUser(id: any, user: StudentModel): Observable<any> {
    return this.http.put(`https://localhost:5001/api/User`.concat(id), user); // TEM QUE ALTERAR A URL DE LOCAL PARA PROD
  }

  UpdateUserEvaluation(data: UserEvaluationModel): Observable<any> {
    return this.http.put(`${baseURL}UserEvaluation/PutUserEvaluation/`, data);

  }

  GetUserEvaluationByUserEvaluationId(id: any): Observable<any> {
    return this.http.get(`${baseURL}UserEvaluation/GetUserEvaluationById/`.concat(id));
  }

  Desactive(id: any, user: StudentModel): Observable<any> {
    return this.http.put(`${baseURL}user/`.concat(id), user);
  }

  Delete(id: any): Observable<any> {
    return this.http.delete(`https://localhost:5001/api/User/`.concat(id)); // TEM QUE ALTERAR A URL DE LOCAL PARA PROD
  }

}