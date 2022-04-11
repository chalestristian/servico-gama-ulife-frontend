import { TestBed } from '@angular/core/testing';

import { GradeUpdateService } from './grade-update.service';

describe('GradeUpdateService', () => {
  let service: GradeUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
