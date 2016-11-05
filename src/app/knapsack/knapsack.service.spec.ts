/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KnapsackService } from './knapsack.service';

describe('Service: Knapsack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnapsackService]
    });
  });

  it('should ...', inject([KnapsackService], (service: KnapsackService) => {
    expect(service).toBeTruthy();
  }));
});
