import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maddy1Component } from './maddy1.component';

describe('Maddy1Component', () => {
  let component: Maddy1Component;
  let fixture: ComponentFixture<Maddy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maddy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maddy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
