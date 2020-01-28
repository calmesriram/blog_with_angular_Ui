import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rammenu1Component } from './rammenu1.component';

describe('Rammenu1Component', () => {
  let component: Rammenu1Component;
  let fixture: ComponentFixture<Rammenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rammenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rammenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
