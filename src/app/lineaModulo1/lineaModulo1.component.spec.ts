/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LineaModulo1Component } from './lineaModulo1.component';

describe('LineaModulo1Component', () => {
  let component: LineaModulo1Component;
  let fixture: ComponentFixture<LineaModulo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaModulo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaModulo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
