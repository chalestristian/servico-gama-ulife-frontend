import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNoticeBoardComponent } from './student-notice-board.component';

describe('StudentNoticeBoardComponent', () => {
  let component: StudentNoticeBoardComponent;
  let fixture: ComponentFixture<StudentNoticeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNoticeBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNoticeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
