/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Block_SesionsComponent } from './block_Sesions.component';

describe('Block_SesionsComponent', () => {
  let component: Block_SesionsComponent;
  let fixture: ComponentFixture<Block_SesionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block_SesionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block_SesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
