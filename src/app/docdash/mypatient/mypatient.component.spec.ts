import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypatientComponent } from './mypatient.component';

describe('MypatientComponent', () => {
  let component: MypatientComponent;
  let fixture: ComponentFixture<MypatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MypatientComponent]
    });
    fixture = TestBed.createComponent(MypatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
