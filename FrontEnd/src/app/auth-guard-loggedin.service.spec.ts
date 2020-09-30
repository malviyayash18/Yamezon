import { TestBed } from '@angular/core/testing';

import { AuthGuardLoggedinService } from './auth-guard-loggedin.service';

describe('AuthGuardLoggedinService', () => {
  let service: AuthGuardLoggedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardLoggedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
