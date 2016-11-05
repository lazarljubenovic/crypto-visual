/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShiftByNService } from './shift-by-n.service';

describe('Service: ShiftByN', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftByNService]
    });
  });

  it('should ...', inject([ShiftByNService], (service: ShiftByNService) => {
    expect(service).toBeTruthy();
  }));
});
