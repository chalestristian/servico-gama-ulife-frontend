import { Component, OnInit } from '@angular/core';
import { UserEvaluationModel } from '../models/userevaluation.model';
import { StudentModel } from '../models/student.model';
import { GradeUpdateService } from '../services/grade-update-service/grade-update.service';

@Component({
  selector: 'app-grade-update',
  templateUrl: './grade-update.component.html',
  styleUrls: ['./grade-update.component.css']
})
export class GradeUpdateComponent implements OnInit {

  userevaluation: UserEvaluationModel = new UserEvaluationModel();
  userevaluations: Array<any> = new Array();
  user: StudentModel = new StudentModel();
  users: Array<any> = new Array();
  selectedOption?: string;
  printedOption?: string;
  
  constructor(private gradeUpdateService : GradeUpdateService) { }

  ngOnInit(){
    this.listUserEvaluation()
    this.listUser();
  }

  updateEvaluation(){
    this.gradeUpdateService.updateevaluation(this.userevaluation).subscribe(userevaluation => {
      this.userevaluation = new UserEvaluationModel();
    }, err => (console.log('Erro ao atualizar', err)))
  }

  listUserEvaluation(){
      this.gradeUpdateService.listuserevaluation().subscribe(userevaluations => {
      this.userevaluations = userevaluations;
      },
      err => (console.log('Erro ao listar', err)))
    }

  listUser(){
      this.gradeUpdateService.listuser().subscribe(users => {
      this.users = users;
      },
      err => (console.log('Erro ao listar', err)))
    }
}
