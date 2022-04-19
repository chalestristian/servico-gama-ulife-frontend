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
import { HeaderComponent } from './header/header.component';
import { StudentNavBarComponent } from './nav-bar/student-nav-bar/student-nav-bar.component';
import { StudentNoticeBoardComponent } from './student-notice-board/student-notice-board.component';
import { ProfessorNoticeBoardComponent } from './professor-notice-board/professor-notice-board.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfessorNavBarComponent } from './nav-bar/professor-nav-bar/professor-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    GradeUpdateComponent,
    HeaderComponent,
    StudentNavBarComponent,
    StudentNoticeBoardComponent,
    ProfessorNoticeBoardComponent,
    CalendarComponent,
    ProfessorNavBarComponent,
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
    })
  ],
  providers: [
    CookieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
