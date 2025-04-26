import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigndocComponent } from './signdoc.component';

describe('SigndocComponent', () => {
  let component: SigndocComponent;
  let fixture: ComponentFixture<SigndocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigndocComponent]
    });
    fixture = TestBed.createComponent(SigndocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
