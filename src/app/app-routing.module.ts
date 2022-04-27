import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { EvaluationComponent } from './evaluation/evaluation.component';
import { GradeComponent } from './grade/grade.component';
import { GuardConfigGuard } from './guard/guard-config.guard';
import { LoginComponent } from './login/login.component'; 
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "aluno", component: StudentComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "aluno/Provas", component: EvaluationComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "aluno/provas/questionario", component: QuestionnaireComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "aluno/Notas", component: GradeComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "professor", component: TeacherComponent, canActivate:[GuardConfigGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
