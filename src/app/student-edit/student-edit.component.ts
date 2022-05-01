import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentListEditService } from '../services/student-list-edit-service/student-list-edit-service';
import { StudentModel } from '../models/student.model';
import { FormGroup, FormControl } from '@angular/forms';
import { UserEvaluationModel } from '../models/userevaluation.model';
import { QuestionnaireModel } from '../models/questionnaire.model';
import { EvaluationModel } from '../models/evaluation.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  UserId!: number;
  userid!: number;
  Evaluation!: any;
  user: StudentModel = new StudentModel();
  users: Array<any> = new Array();
  userevaluation: UserEvaluationModel = new UserEvaluationModel();
  userevaluations: Array<any> = new Array();
  evaluation: EvaluationModel = new EvaluationModel();
  evaluations: Array<any> = new Array();
  formStudent!: FormGroup;
  formEvaluation!: FormGroup;

  constructor(private studentListEditService: StudentListEditService, public dialog: MatDialog) { }

  ngOnInit() {
    this.createFormStudent(new StudentModel())
    this.createFormEvaluation(new UserEvaluationModel())
    this.UserId = Number(this.GetRegistry())
    this.userid = Number(this.GetUserId())
    this.GetUser(this.UserId)
    console.log(this.GetUserEvaulation(this.userid))
    this.evaluations = (JSON.parse(this.studentListEditService.getSession('Test')))
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
      let evaluations = (JSON.parse(this.studentListEditService.getSession('Test')))

      for (let i = 0; i < userevaluations.length; i++) {
        for (let j = 0; j < evaluations.length; j++) {
          if (this.userevaluations[i].nr_evaluationid === evaluations[j].nr_evaluationid) {
            console.log(' IGUAIS, POIS ' + this.userevaluations[i].nr_evaluationid + ' É IGUAL A ' + evaluations[j].nr_evaluationid)
            console.log(Object.assign(evaluations[j], userevaluations[i]))
          } else {
          }
        }
      }
    }, err => {
      console.log("Erro ao tentar buscar user/evaluation", err)
    })
  }

  GetQuestionnaire(id: number) {
    this.studentListEditService.GetUserEvaluationById(id).subscribe(userevaluations => {
      this.userevaluations = userevaluations;
    }, err => {
      console.log("Erro ao tentar buscar questionario por id", err)
    })
  }

  List() {
    this.studentListEditService.GetAllUser().subscribe(user => {
      this.user = user;
    }, err => {
      console.log('Erro ao listar', err)
    })
  }

  GetRegistry(): void {
    let userId = this.studentListEditService.getSession('UserId');
    return userId
  }

  GetUserId(): void {
    let userid = this.studentListEditService.getSession('userid');
    return userid
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