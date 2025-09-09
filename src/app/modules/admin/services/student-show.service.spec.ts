import { TestBed } from '@angular/core/testing';

import { StudentShowService } from './student-show.service';

describe('StudentShowService', () => {
  let service: StudentShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
