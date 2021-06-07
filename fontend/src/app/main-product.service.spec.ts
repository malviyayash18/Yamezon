import { TestBed } from '@angular/core/testing';

import { MainProductService } from './main-product.service';

describe('MainProductService', () => {
  let service: MainProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
