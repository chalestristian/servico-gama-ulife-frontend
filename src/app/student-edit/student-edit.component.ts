import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StudentListService } from '../services/student-list-service/student-list-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  UserId!: number;
  subscription!: Subscription;

  constructor(private studentListService : StudentListService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log("EDIT " + this.getid())
}


  getid(): void{    

  let userId= this.studentListService.getSession('UserId');
  return userId  
  }  
}

