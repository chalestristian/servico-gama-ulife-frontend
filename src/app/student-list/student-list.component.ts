import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentListEditService } from '../services/student-list-edit-service/student-list-edit-service';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import { StatusStudent } from '../models/statusstudent.model';
import { UserEvaluationModel } from '../models/userevaluation.model';
import { EvaluationModel } from '../models/evaluation.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};


  constructor(
    private studentListEditService: StudentListEditService, 
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.ListUsers();
    Number(this.UserId = this.GetId()); 
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
  ListUsers(): void {
    this.studentListEditService.GetAllUser().subscribe(users => {
      this.users = users;
      this.dtTrigger.next(users);
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
 

  openDialog(data: any) { 
    this.dialog.open(StudentEditComponent, {
     data
    });
    this.selected = 'Ações';
  }


  
  openDialogTest(data: any): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '400px',
      data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(["professor/alunos"]); 
    });
  }
  
  toggleActived(value: any){
    console.log(value);
  }
}