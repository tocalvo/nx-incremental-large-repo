import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component29Component } from './lib2childlib1component29.component';

describe('Lib2childlib1component29Component', () => {
  let component: Lib2childlib1component29Component;
  let fixture: ComponentFixture<Lib2childlib1component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
