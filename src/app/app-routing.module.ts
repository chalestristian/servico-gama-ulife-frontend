import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { EvaluationComponent } from './evaluation/evaluation.component';
import { GradeComponent } from './grade/grade.component';
import { GuardConfigGuard } from './guard/guard-config.guard';
import { LoginComponent } from './login/login.component'; 
import { NotFoundComponent } from './not-found/not-found.component'; 
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { StudentComponent } from './student/student.component';
import { TeacherEvaluationsComponent } from './teacher-evaluations/teacher-evaluations.component';
import { TeacherStudentsComponent } from './teacher-students/teacher-students.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent, canActivate:[GuardConfigGuard]
  },

  {
    path: "aluno", component: StudentComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "aluno/provas", component: EvaluationComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "aluno/provas/prova", component: QuestionnaireComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "aluno/notas", component: GradeComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "professor", component: TeacherComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "professor/alunos", component: TeacherStudentsComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "professor/provas", component: TeacherEvaluationsComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "**", component: NotFoundComponent, canActivate:[GuardConfigGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
