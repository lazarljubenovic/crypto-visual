/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KnapsackComponent } from './knapsack.component';

describe('KnapsackComponent', () => {
  let component: KnapsackComponent;
  let fixture: ComponentFixture<KnapsackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnapsackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnapsackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
