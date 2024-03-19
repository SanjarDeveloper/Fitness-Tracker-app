import { TestBed } from '@angular/core/testing';

import { ServiceWorkoutService } from './service-workout.service';

describe('ServiceWorkoutService', () => {
  let service: ServiceWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
