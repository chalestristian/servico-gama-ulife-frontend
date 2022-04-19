import { Component, OnInit } from '@angular/core';
import { UserEvaluationModel } from '../models/userevaluation.model';
import { UserModel } from '../models/user.model';
import { GradeUpdateService } from '../services/http/grade-update-service/grade-update.service';

@Component({
  selector: 'app-grade-update',
  templateUrl: './grade-update.component.html',
  styleUrls: ['./grade-update.component.css']
})
export class GradeUpdateComponent implements OnInit {

  userevaluation: UserEvaluationModel = new UserEvaluationModel();
  userevaluations: Array<any> = new Array();

  user: UserModel = new UserModel();
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

    print() {
      this.printedOption = this.selectedOption;
      this.user.nr_user == this.selectedOption
      console.log("My input: ", this.user);
    }
  //  listUser(){
  //     this.gradeUpdateService.listGrade().subscribe(userevaluations => {
  //     this.userevaluations = userevaluations;
  //     },
  //     err => (console.log('Erro ao atualizar', err)))
  //   }
  }
