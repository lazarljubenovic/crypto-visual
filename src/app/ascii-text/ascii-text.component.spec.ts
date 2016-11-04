/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsciiTextComponent } from './ascii-text.component';

describe('AsciiTextComponent', () => {
  let component: AsciiTextComponent;
  let fixture: ComponentFixture<AsciiTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
