import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component46Component } from './lib2childlib3component46.component';

describe('Lib2childlib3component46Component', () => {
  let component: Lib2childlib3component46Component;
  let fixture: ComponentFixture<Lib2childlib3component46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});