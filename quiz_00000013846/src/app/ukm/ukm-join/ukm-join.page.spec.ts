import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmJoinPage } from './ukm-join.page';

describe('UkmJoinPage', () => {
  let component: UkmJoinPage;
  let fixture: ComponentFixture<UkmJoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkmJoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkmJoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
