import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component38Component } from './lib2childlib2component38.component';

describe('Lib2childlib2component38Component', () => {
  let component: Lib2childlib2component38Component;
  let fixture: ComponentFixture<Lib2childlib2component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
