import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component0Component } from './lib4childlib0component0.component';

describe('Lib4childlib0component0Component', () => {
  let component: Lib4childlib0component0Component;
  let fixture: ComponentFixture<Lib4childlib0component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
