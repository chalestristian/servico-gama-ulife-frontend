import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentListEditService } from '../services/student-list-edit-service/student-list-edit-service';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { StatusStudent } from '../models/statusstudent.model';
import { UserEvaluationModel } from '../models/userevaluation.model';
import { EvaluationModel } from '../models/evaluation.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})

export class StudentListComponent implements OnInit {
  selected = 'Ações';
  UserId!: any;
  status: StatusStudent = new StatusStudent();
  user: StudentModel = new StudentModel();
  users: Array<any> = new Array();
  userevaluation: UserEvaluationModel = new UserEvaluationModel();
  userevaluations: Array<any> = new Array();
  evaluation: EvaluationModel = new EvaluationModel();
  evaluations: Array<any> = new Array();

  constructor(private studentListEditService: StudentListEditService, public dialog: MatDialog) { }
  ngOnInit() {
    this.ListUsers();
    Number(this.UserId = this.GetId());
    this.GetEvaluation()
  }

  ListUsers(): void {
    this.studentListEditService.GetAllUser().subscribe(users => {
      this.users = users;
    },
      err => (console.log('Erro ao listar', err)))
  }

  ListUser(id: number) {
    this.studentListEditService.GetUserById(id).subscribe(user => {
      this.user = user;
      this.studentListEditService.setSession('UserId', this.user.nr_registry);
      this.studentListEditService.setSession('userid', this.user.nr_userid);
    }, err => {
      console.log("Erro ao tentar buscar user", err)
    })
  }

  DesactiveUser(id: number) {
    this.studentListEditService.Desactive(id, this.user).subscribe(user => {
      this.user = new StudentModel
    })
  }

  DeleteUser(id: number) {
    this.studentListEditService.Delete(id).subscribe(user => {
      this.user = new StudentModel
    })
  }

  GetId(): void {
    let userId = this.studentListEditService.getSession('UserId');
    return userId
  }

  GetEvaluation() {
    this.studentListEditService.GetAllEvaluation().subscribe(evaluations => {
      this.evaluations = evaluations;
      this.studentListEditService.setSession("Test", this.evaluations);
    })
  }

  openDialog() {
    this.dialog.open(StudentEditComponent);
    this.selected = 'Ações';
  }
}