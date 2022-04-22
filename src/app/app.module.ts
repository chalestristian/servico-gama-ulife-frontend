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
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';





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
    StudentListComponent,
    StudentEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 3000, // 3 segundos
      closeButton: true,
      progressBar: true,
    })
  ],
  providers: [
    CookieService,
    DatePipe,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
