import { TestBed, inject } from '@angular/core/testing';

import { JwtService } from './jwt-service.service';

describe('JwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtService]
    });
  });

  it('should ...', inject([JwtService], (service: JwtService) => {
    expect(service).toBeTruthy();
  }));
});
