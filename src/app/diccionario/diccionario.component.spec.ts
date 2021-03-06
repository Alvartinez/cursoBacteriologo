/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiccionarioComponent } from './diccionario.component';

describe('DiccionarioComponent', () => {
  let component: DiccionarioComponent;
  let fixture: ComponentFixture<DiccionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiccionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiccionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
