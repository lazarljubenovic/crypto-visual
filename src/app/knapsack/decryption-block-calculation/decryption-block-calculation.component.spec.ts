/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DecryptionBlockCalculationComponent } from './decryption-block-calculation.component';

describe('DecryptionBlockCalculationComponent', () => {
  let component: DecryptionBlockCalculationComponent;
  let fixture: ComponentFixture<DecryptionBlockCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecryptionBlockCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptionBlockCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
