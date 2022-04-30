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
import { NoticeBoardComponent } from './notice-board/notice-board.component';
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
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { TimerComponent } from './timer/timer.component';
import { TeacherStudentsComponent } from './teacher-students/teacher-students.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    GradeUpdateComponent, 
    NoticeBoardComponent,
    CalendarComponent, 
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    EvaluationComponent,
    QuestionnaireComponent,
    GradeComponent,
    MobileComponent,
    DesktopComponent,
    NotFoundComponent,
    FooterComponent,
    TimerComponent,
    TeacherStudentsComponent,
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
    DatePipe,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
