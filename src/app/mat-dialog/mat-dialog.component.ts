import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentListEditService } from '../services/student-list-edit-service/student-list-edit-service';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {

  UserId!: any;
  userid!: any;
  Evaluation!: any;
  users: Array<any> = new Array();
  user: any;
  userevaluations: Array<any> = new Array();
  userevaluation: any = [];

  formStudent!: FormGroup;
  formEvaluation!: FormGroup;

  Email: string = '';
  UserName: string = '';

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentListEditService: StudentListEditService,
    private toastService: ToastrService
  ) { }
  ngOnInit(): void {
    this.GetUserEvaulation(this.data.nr_userid);
    this.GetUser(this.data.nr_registry);
  }

  createFormStudent(value: any) {
    this.formStudent = new FormGroup({
      nm_user: new FormControl(value["nm_user"]),
      ds_email: new FormControl(value["ds_email"]),
    })
  }
  createFormEvaluation(value: any) {
    this.formEvaluation = new FormGroup({
      nr_userid: new FormControl(value["nr_userid"]),
      nr_evaluationid: new FormControl(value["nr_evaluationid"]),
      dr_grade: new FormControl(value["dr_grade"]),
      ds_hasdone: new FormControl(true),
      nr_userevaluationid: new FormControl(value["nr_userevaluationid"]),
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  GetUserEvaulation(id: any) {
    this.studentListEditService.GetUserEvaluationById(id).subscribe(userevaluations => {
      this.userevaluations = userevaluations;
      this.createFormEvaluation(userevaluations);
    }, err => {
      console.log("Erro ao tentar buscar user/evaluation", err)
    })
  }

  GetUser(id: any) {
    this.studentListEditService.GetUserById(id).subscribe(user => {
      this.user = user;
      this.createFormStudent(user);
    }, err => {
      console.log("Erro ao tentar buscar user", err)
    })
  }

  onStudentSubmit() {
    if (this.formStudent.value.nm_user == this.user['nm_user'] && this.formStudent.value.ds_email == this.user['ds_email']) {
      this.toastService.warning("Nenhum dado do usuário modificado.")
    } else {
      if (this.verifyString(this.formStudent.value.nm_user)) {
        this.formStudent.value.nm_user = this.user['nm_user'];
      }
      if (this.verifyString(this.formStudent.value.ds_email)) {
        this.formStudent.value.ds_email = this.user['ds_email'];
      }
      this.studentListEditService.UpdateUser(this.user.nr_registry, this.formStudent.value)
        .subscribe({
          error: (e) => { this.toastService.error("Erro ao alterada os dados do usuário.") },
          next: (e) => { this.toastService.success("Dados atualizados com sucesso.") }
        }
        );
    }
  }
  verifyString(str: string) {
    if (str === null || str === '') {
      return true;
    }
    return false;
  }

  onEvaluationSubmit(id: number) {
    this.studentListEditService.GetUserEvaluationByUserEvaluationId(id).subscribe(userevaluation => {
      this.userevaluation = userevaluation;
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
      this.toastService.success("Nota alterada com sucesso.")
    }, err => {
      this.toastService.error("Não foi possível alterar a nota.")
      console.log("Erro", err)
    })
  }
}