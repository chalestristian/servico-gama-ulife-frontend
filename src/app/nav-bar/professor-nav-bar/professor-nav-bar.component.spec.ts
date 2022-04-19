import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorNavBarComponent } from './professor-nav-bar.component';

describe('ProfessorNavBarComponent', () => {
  let component: ProfessorNavBarComponent;
  let fixture: ComponentFixture<ProfessorNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
