import { TestBed } from '@angular/core/testing';

import { StudentEditServiceService } from './student-edit-service.service';

describe('StudentEditServiceService', () => {
  let service: StudentEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
