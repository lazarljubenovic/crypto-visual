/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CiphertextBlockCalculationComponent } from './ciphertext-block-calculation.component';

describe('CiphertextBlockCalculationComponent', () => {
  let component: CiphertextBlockCalculationComponent;
  let fixture: ComponentFixture<CiphertextBlockCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiphertextBlockCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiphertextBlockCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
