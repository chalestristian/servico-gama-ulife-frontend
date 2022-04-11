import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GradeUpdateModel } from 'src/app/models/gradeupdate.model';
import { baseURL} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeUpdateService {

  constructor(private http: HttpClient) { }

updateGrade(grade: GradeUpdateModel): Observable<any>{
 return this.http.put(`${baseURL}UserEvaluation/PutUserEvaluation/`, grade)
}
}
