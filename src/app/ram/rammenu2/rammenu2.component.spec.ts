import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rammenu2Component } from './rammenu2.component';

describe('Rammenu2Component', () => {
  let component: Rammenu2Component;
  let fixture: ComponentFixture<Rammenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rammenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rammenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
