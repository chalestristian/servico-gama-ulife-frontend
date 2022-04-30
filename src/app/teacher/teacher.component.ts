import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  selected: string = "Home";
  isChecked: boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(valor: any){ 
    console.log(valor["source"].checked);
    console.log(valor["source"].id)
  }

  lista: any =[
    {student_id: "11", text: "Aluno1", situation: false},
    {student_id: "22", text: "Aluno2", situation: true},
    {student_id: "33", text: "Aluno3", situation: false},
    {student_id: "44", text: "Aluno4", situation: true}
  ]

}
