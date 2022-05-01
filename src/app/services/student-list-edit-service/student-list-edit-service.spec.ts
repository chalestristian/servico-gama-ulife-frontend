import { TestBed } from '@angular/core/testing';
import { StudentListEditService } from '../student-list-edit-service/student-list-edit-service';

describe('StudentListServiceService', () => {
  let service: StudentListEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentListEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
