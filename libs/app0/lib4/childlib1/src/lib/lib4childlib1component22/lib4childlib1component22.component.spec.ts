import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component22Component } from './lib4childlib1component22.component';

describe('Lib4childlib1component22Component', () => {
  let component: Lib4childlib1component22Component;
  let fixture: ComponentFixture<Lib4childlib1component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
