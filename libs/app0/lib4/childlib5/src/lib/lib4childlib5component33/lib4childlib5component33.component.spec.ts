import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component33Component } from './lib4childlib5component33.component';

describe('Lib4childlib5component33Component', () => {
  let component: Lib4childlib5component33Component;
  let fixture: ComponentFixture<Lib4childlib5component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
