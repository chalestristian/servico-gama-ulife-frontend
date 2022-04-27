import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { ExampleComponent } from './example/example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GradeUpdateComponent } from './grade-update/grade-update.component'; 
import { StudentNoticeBoardComponent } from './student-notice-board/student-notice-board.component';
import { ProfessorNoticeBoardComponent } from './professor-notice-board/professor-notice-board.component';
import { CalendarComponent } from './calendar/calendar.component'; 
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import {MaterialModule} from './MaterialModule';
import { TeacherComponent } from './teacher/teacher.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { GradeComponent } from './grade/grade.component';
import { MobileComponent } from './nav-bar/mobile/mobile.component';
import { DesktopComponent } from './nav-bar/desktop/desktop.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    GradeUpdateComponent, 
    StudentNoticeBoardComponent,
    ProfessorNoticeBoardComponent,
    CalendarComponent, 
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    EvaluationComponent,
    QuestionnaireComponent,
    GradeComponent,
    MobileComponent,
    DesktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // 3 segundos
      closeButton: true,
      progressBar: true,
    }),
    MaterialModule
  ],
  providers: [
    CookieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
