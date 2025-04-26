import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RdvlComponent } from './rdvl.component';

describe('RdvlComponent', () => {
  let component: RdvlComponent;
  let fixture: ComponentFixture<RdvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RdvlComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with therapist information', () => {
    expect(component.therapist).toBeDefined();
    expect(component.therapist.name).toBe('Dr. Édouard Guidez');
  });

  it('should generate initial dates', () => {
    expect(component.dates.length).toBe(7);
  });

  it('should toggle date expansion', () => {
    const dateItem = component.dates[0];
    component.toggleDateExpansion(dateItem);
    expect(dateItem.isExpanded).toBe(true);

    // Should collapse other dates
    const secondDate = component.dates[1];
    component.toggleDateExpansion(secondDate);
    expect(dateItem.isExpanded).toBe(false);
    expect(secondDate.isExpanded).toBe(true);
  });

  it('should load more dates', () => {
    const initialLength = component.dates.length;
    component.loadMoreDates();
    expect(component.dates.length).toBe(initialLength + 7);
  });

  it('should select time slot if available', () => {
    const dateItem = component.dates[0];
    const timeSlot = dateItem.timeSlots[0];
    timeSlot.available = true;

    component.selectTimeSlot(dateItem, timeSlot);
    expect(component.selectedDate).toBe(dateItem);
    expect(component.selectedTimeSlot).toBe(timeSlot);
  });
});
