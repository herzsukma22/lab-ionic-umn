import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetgbtPage } from './targetgbt.page';

describe('TargetgbtPage', () => {
  let component: TargetgbtPage;
  let fixture: ComponentFixture<TargetgbtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetgbtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetgbtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
