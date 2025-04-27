import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorComponent } from './doctors.component';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of doctors', () => {
    const doctorElements = fixture.nativeElement.querySelectorAll('.doctor-card');
    expect(doctorElements.length).toBe(component.doctors.length);
  });

  it('should call contactDoctor method when contact button is clicked', () => {
    spyOn(component, 'contactDoctor');
    const contactButton = fixture.nativeElement.querySelector('.btn-contact');
    contactButton.click();
    expect(component.contactDoctor).toHaveBeenCalled();
  });

  it('should call bookAppointment method when appointment button is clicked', () => {
    spyOn(component, 'bookAppointment');
    const appointmentButton = fixture.nativeElement.querySelector('.btn-appointment');
    appointmentButton.click();
    expect(component.bookAppointment).toHaveBeenCalled();
  });
});
