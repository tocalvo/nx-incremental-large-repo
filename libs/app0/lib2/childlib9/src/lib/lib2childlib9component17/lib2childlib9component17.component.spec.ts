import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component17Component } from './lib2childlib9component17.component';

describe('Lib2childlib9component17Component', () => {
  let component: Lib2childlib9component17Component;
  let fixture: ComponentFixture<Lib2childlib9component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
