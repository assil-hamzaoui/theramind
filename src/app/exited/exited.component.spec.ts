import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitedComponent } from './exited.component';

describe('ExitedComponent', () => {
  let component: ExitedComponent;
  let fixture: ComponentFixture<ExitedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExitedComponent]
    });
    fixture = TestBed.createComponent(ExitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
