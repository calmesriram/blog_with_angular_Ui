import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Appmenu1Component } from './appmenu1.component';

describe('Appmenu1Component', () => {
  let component: Appmenu1Component;
  let fixture: ComponentFixture<Appmenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appmenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appmenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
