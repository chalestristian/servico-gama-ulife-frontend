import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentListEditService } from '../services/student-list-edit-service/student-list-edit-service';
import { StudentModel } from '../models/student.model';
import { FormGroup, FormControl } from '@angular/forms';
import { UserEvaluationModel } from '../models/userevaluation.model';
import { QuestionnaireModel } from '../models/questionnaire.model';
import { EvaluationModel } from '../models/evaluation.model';
import { ThisReceiver } from '@angular/compiler';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  UserId!: any;
  userid!: any;
  Evaluation!: any;
  user: StudentModel = new StudentModel();
  users: Array<any> = new Array();
  userevaluation: UserEvaluationModel = new UserEvaluationModel();
  userevaluations: Array<any> = new Array();
  evaluation: EvaluationModel = new EvaluationModel();
  formStudent!: FormGroup;
  formEvaluation!: FormGroup;

 

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,
    private studentListEditService: StudentListEditService, public dialog: MatDialog) { }

  ngOnInit() {
    this.createFormStudent(new StudentModel())
    this.createFormEvaluation(new UserEvaluationModel())
    this.UserId = this.data.nr_registry;
    this.userid = this.data.nr_userid;

    this.GetUser(this.UserId);
    this.GetUserEvaulation(this.userid);
  }

  GetUser(id: number) {
    this.studentListEditService.GetUserById(id).subscribe(user => {
      this.user = user;
    }, err => {
      console.log("Erro ao tentar buscar user", err)
    })
  }

  GetUserEvaulation(id: number) {
    this.studentListEditService.GetUserEvaluationById(id).subscribe(userevaluations => {
      this.userevaluations = userevaluations; 
    }, err => {
      console.log("Erro ao tentar buscar user/evaluation", err)
    })
  } 
  
  List() {
    this.studentListEditService.GetAllUser().subscribe(user => {
      this.user = user;
    }, err => {
      console.log('Erro ao listar', err)
    })
  }

  createFormStudent(user: StudentModel) {
    this.formStudent = new FormGroup({
      nm_user: new FormControl(user.nm_user),
      ds_email: new FormControl(user.ds_email),
    })

  }

  createFormEvaluation(userevaluation: UserEvaluationModel) {
    this.formEvaluation = new FormGroup({
      nr_userid: new FormControl(userevaluation.nr_userid),
      nr_evaluationid: new FormControl(userevaluation.nr_evaluationid),
      dr_grade: new FormControl(userevaluation.dr_grade),
      ds_hasdone: new FormControl(userevaluation.ds_hasdone),
      nr_userevaluationid: new FormControl(userevaluation.nr_userevaluationid),
    })

  }

  onStudentSubmit() {
    if (this.formStudent.value.nm_user === null && this.formStudent.value.ds_email === null) {
      return console.log('insira um valor')
    }
    else if (this.formStudent.value.nm_user === null) {
      this.formStudent.value.nm_user = this.user.nm_user
      return this.studentListEditService.UpdateUser(this.user.nr_registry, this.formStudent.value).subscribe()
    }
    else if (this.formStudent.value.ds_email === null) {
      this.formStudent.value.ds_email = this.user.ds_email
      this.studentListEditService.UpdateUser(this.user.nr_registry, this.formStudent.value).subscribe()
    }
  }

  onEvaluationSubmit(id: number) {
    this.studentListEditService.GetUserEvaluationByUserEvaluationId(id).subscribe(userevaluation => {
      this.userevaluation = userevaluation;
      console.log('MODELO QUE EU CLIQUEI:')
      console.log(this.userevaluation)

      this.formEvaluation.value.nr_userid = this.userevaluation.nr_userid
      this.formEvaluation.value.nr_evaluationid = this.userevaluation.nr_evaluationid

      if (this.formEvaluation.value.dr_grade === null) {
        return console.log('insira um valor') // nao deixa setar zero se nao preencher
      } else {
        this.formEvaluation.value.dr_grade = Number(this.formEvaluation.value.dr_grade)
      }

      this.formEvaluation.value.ds_hasdone = true
      this.formEvaluation.value.nr_userevaluationid = this.userevaluation.nr_userevaluationid
      let data = this.formEvaluation.value
      this.studentListEditService.UpdateUserEvaluation(data).subscribe()

    }, err => {
      console.log("Erro", err)
    })
  }
}