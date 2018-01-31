import { TestBed, inject } from '@angular/core/testing';

import { RxdbService } from './rxdb.service';

describe('RxdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxdbService]
    });
  });

  it('should be created', inject([RxdbService], (service: RxdbService) => {
    expect(service).toBeTruthy();
  }));
});
