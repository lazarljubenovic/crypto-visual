/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CodebookCipherService } from './codebook-cipher.service';

describe('Service: CodebookCipher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodebookCipherService]
    });
  });

  it('should ...', inject([CodebookCipherService], (service: CodebookCipherService) => {
    expect(service).toBeTruthy();
  }));
});
