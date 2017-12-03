import { TestBed, inject } from '@angular/core/testing';

import { MatchDetailsService } from './match-details.service';

describe('MatchDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchDetailsService]
    });
  });

  it('should be created', inject([MatchDetailsService], (service: MatchDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
