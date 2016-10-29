/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoubleTranspositionService } from './double-transposition.service';

describe('Service: DoubleTransposition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoubleTranspositionService]
    });
  });

  it('should ...', inject([DoubleTranspositionService], (service: DoubleTranspositionService) => {
    expect(service).toBeTruthy();
  }));
});
