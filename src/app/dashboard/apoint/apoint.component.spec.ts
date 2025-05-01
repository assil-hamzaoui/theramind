import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointComponent } from './apoint.component';

describe('ApointComponent', () => {
  let component: ApointComponent;
  let fixture: ComponentFixture<ApointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApointComponent]
    });
    fixture = TestBed.createComponent(ApointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
