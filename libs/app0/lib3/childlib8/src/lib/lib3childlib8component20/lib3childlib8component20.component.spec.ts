import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component20Component } from './lib3childlib8component20.component';

describe('Lib3childlib8component20Component', () => {
  let component: Lib3childlib8component20Component;
  let fixture: ComponentFixture<Lib3childlib8component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});