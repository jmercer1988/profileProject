import { TestBed } from '@angular/core/testing';

import { EmployeeInfoServiceService } from './employee-info-service.service';

describe('EmployeeInfoServiceService', () => {
  let service: EmployeeInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
