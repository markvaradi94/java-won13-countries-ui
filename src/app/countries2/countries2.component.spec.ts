import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Countries2Component } from './countries2.component';

describe('Countries2Component', () => {
  let component: Countries2Component;
  let fixture: ComponentFixture<Countries2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Countries2Component]
    });
    fixture = TestBed.createComponent(Countries2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
