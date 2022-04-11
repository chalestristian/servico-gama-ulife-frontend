import { Component, OnInit } from '@angular/core';
import { GradeUpdateModel } from '../models/gradeupdate.model';
import { GradeUpdateService } from '../services/http/grade-update-service/grade-update.service';

@Component({
  selector: 'app-grade-update',
  templateUrl: './grade-update.component.html',
  styleUrls: ['./grade-update.component.css']
})
export class GradeUpdateComponent implements OnInit {

  gradeupdate: GradeUpdateModel = new GradeUpdateModel();
  gradeupdates: Array<any> = new Array();
  constructor(private gradeUpdateService : GradeUpdateService) { }

  ngOnInit(){
  }

  update(){
    this.gradeUpdateService.updateGrade(this.gradeupdate).subscribe(gradeupdate => {
      this.gradeupdate = new GradeUpdateModel();
    }, err => (console.log('Erro ao atualizar', err)))
      }

}
