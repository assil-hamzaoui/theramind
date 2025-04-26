import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HappyComponent } from './happy.component';

describe('HappyComponent', () => {
  let component: HappyComponent;
  let fixture: ComponentFixture<HappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change quote when changeQuote is called', (done) => {
    const initialQuote = component.currentQuoteIndex;
    component.changeQuote(1);

    setTimeout(() => {
      expect(component.currentQuoteIndex).toBe(1);
      done();
    }, 600);
  });

  it('should have correct number of quotes', () => {
    expect(component.quotes.length).toBe(5);
  });

  it('should have correct number of channels', () => {
    expect(component.channels.length).toBe(3);
  });
});
