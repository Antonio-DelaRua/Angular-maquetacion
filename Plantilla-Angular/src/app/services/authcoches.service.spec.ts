import { TestBed } from '@angular/core/testing';

import { AuthcochesService } from './authcoches.service';

describe('AuthcochesService', () => {
  let service: AuthcochesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcochesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
