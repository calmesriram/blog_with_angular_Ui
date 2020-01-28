import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Appmenu2Component } from './appmenu2.component';

describe('Appmenu2Component', () => {
  let component: Appmenu2Component;
  let fixture: ComponentFixture<Appmenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appmenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appmenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
