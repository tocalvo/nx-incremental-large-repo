import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1parentComponent } from './lib2childlib1parent.component';

describe('Lib2childlib1parentComponent', () => {
  let component: Lib2childlib1parentComponent;
  let fixture: ComponentFixture<Lib2childlib1parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
