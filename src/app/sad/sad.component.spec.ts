import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SadComponent } from './sad.component';

describe('SadComponent', () => {
  let component: SadComponent;
  let fixture: ComponentFixture<SadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')).toBeTruthy();
    expect(compiled.querySelector('h2')?.textContent).toContain('Citations Inspirantes');
  });

  it('should have quotes section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.quotes')).toBeTruthy();
    expect(compiled.querySelectorAll('.quote').length).toBeGreaterThan(0);
  });

  it('should have embedded iframes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const iframes = compiled.querySelectorAll('iframe');
    expect(iframes.length).toBe(2); // One for Spotify, one for YouTube
  });
});