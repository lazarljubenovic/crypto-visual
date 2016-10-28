/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimpleSubstitutionService } from './simple-substitution.service';

describe('Service: SimpleSubstitution', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleSubstitutionService]
    });
  });

  it('should ...', inject([SimpleSubstitutionService], (service: SimpleSubstitutionService) => {
    expect(service).toBeTruthy();
  }));
});
