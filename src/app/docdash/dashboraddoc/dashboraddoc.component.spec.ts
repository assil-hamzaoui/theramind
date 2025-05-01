import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboraddocComponent } from './dashboraddoc.component';

describe('DashboraddocComponent', () => {
  let component: DashboraddocComponent;
  let fixture: ComponentFixture<DashboraddocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboraddocComponent]
    });
    fixture = TestBed.createComponent(DashboraddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
