/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rs4PrgaComponent } from './rs4-prga.component';

describe('Rs4PrgaComponent', () => {
  let component: Rs4PrgaComponent;
  let fixture: ComponentFixture<Rs4PrgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rs4PrgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rs4PrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
