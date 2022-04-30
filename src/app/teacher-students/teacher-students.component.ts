import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-students',
  templateUrl: './teacher-students.component.html',
  styleUrls: ['./teacher-students.component.css']
})
export class TeacherStudentsComponent implements OnInit {

  selected: string = "Alunos";
  constructor() { }

  ngOnInit(): void {
  }

}
