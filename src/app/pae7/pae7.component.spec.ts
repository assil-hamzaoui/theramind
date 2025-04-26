import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pae7Component } from './pae7.component';

describe('Pae7Component', () => {
  let component: Pae7Component;
  let fixture: ComponentFixture<Pae7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pae7Component]
    });
    fixture = TestBed.createComponent(Pae7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
