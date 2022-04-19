import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorNoticeBoardComponent } from './professor-notice-board.component';

describe('ProfessorNoticeBoardComponent', () => {
  let component: ProfessorNoticeBoardComponent;
  let fixture: ComponentFixture<ProfessorNoticeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorNoticeBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorNoticeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
