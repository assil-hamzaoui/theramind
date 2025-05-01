import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheraComponent } from './thera.component';

describe('TheraComponent', () => {
  let component: TheraComponent;
  let fixture: ComponentFixture<TheraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheraComponent]
    });
    fixture = TestBed.createComponent(TheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
