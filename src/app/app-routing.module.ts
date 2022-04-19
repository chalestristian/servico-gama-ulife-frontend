import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { GradeUpdateComponent } from './grade-update/grade-update.component';
import { GuardConfigGuard } from './guard/guard-config.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfessorNoticeBoardComponent } from './professor-notice-board/professor-notice-board.component';
import { StudentNoticeBoardComponent } from './student-notice-board/student-notice-board.component';

const routes: Routes = [
  {
    path: "", component: ExampleComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "gradeupdate", component: GradeUpdateComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "navbar", component: NavBarComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "studentboard", component: StudentNoticeBoardComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "professorboard", component: ProfessorNoticeBoardComponent, canActivate:[GuardConfigGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
