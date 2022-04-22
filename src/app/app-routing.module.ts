import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ExampleComponent } from './example/example.component';
import { GradeUpdateComponent } from './grade-update/grade-update.component';
import { GuardConfigGuard } from './guard/guard-config.guard';
import { ProfessorNavBarComponent } from './nav-bar/professor-nav-bar/professor-nav-bar.component';
import { StudentNavBarComponent } from './nav-bar/student-nav-bar/student-nav-bar.component';
import { ProfessorNoticeBoardComponent } from './professor-notice-board/professor-notice-board.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNoticeBoardComponent } from './student-notice-board/student-notice-board.component';

const routes: Routes = [
  {
    path: "", component: ExampleComponent, canActivate:[GuardConfigGuard]
  },

  {
    path: "gradeupdate", component: GradeUpdateComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "studentnavbar", component: StudentNavBarComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "professornavbar", component: ProfessorNavBarComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "studentboard", component: StudentNoticeBoardComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "professorboard", component: ProfessorNoticeBoardComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "calendar", component: CalendarComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "studentlist", component: StudentListComponent, canActivate:[GuardConfigGuard]
  },
  {
    path: "studentedit", component: StudentEditComponent, canActivate:[GuardConfigGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
