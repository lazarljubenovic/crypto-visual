/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rc4PrgaSingleStateComponent } from './rc4-prga-single-state.component';

describe('Rc4PrgaSingleStateComponent', () => {
  let component: Rc4PrgaSingleStateComponent;
  let fixture: ComponentFixture<Rc4PrgaSingleStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rc4PrgaSingleStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rc4PrgaSingleStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
