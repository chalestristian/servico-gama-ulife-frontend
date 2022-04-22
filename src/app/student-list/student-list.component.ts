import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import {MatDialog} from '@angular/material/dialog';
import { StudentListService } from '../services/student-list-service/student-list-service.service';
import { StudentEditComponent } from '../student-edit/student-edit.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],

})

export class StudentListComponent implements OnInit {
  selected = 'Ações';
  UserId!: number;
  user: UserModel = new UserModel();
  users: Array<any> = new Array();

  constructor(private studentListService : StudentListService, public dialog: MatDialog) { }
  ngOnInit(){
  this.listUser();
  }
  
  listUser(): void{
      this.studentListService.listuser().subscribe(users => {
      this.users = users;
      },
      err => (console.log('Erro ao listar', err)))
  }

  public getUser(id: number){
    this.studentListService.getuserbyid(id).subscribe(user => {
    this.UserId = id;
    this.studentListService.setSession('UserId', this.UserId);    
    console.log("LIST " + this.UserId) 
    this.user = user;
    this.user.nr_registry = user.nr_registry;
        
        console.log(this.user.nr_registry)
      }, err =>{
        console.log("Erro ao tentar buscar user", err) 
      })
  }
    
    openDialog() {
      this.dialog.open(StudentEditComponent);   
      this.selected = 'Ações';

    }
  }  