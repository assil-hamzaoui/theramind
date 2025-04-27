import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a message when sendMessage is called', () => {
    component.newMessage = 'I feel nervous.';
    component.sendMessage();
    expect(component.messages.length).toBeGreaterThan(0);
  });

  it('should send a therapist reply after a delay', (done) => {
    component.newMessage = 'I feel nervous.';
    component.sendMessage();
    setTimeout(() => {
      expect(component.messages.some(msg => msg.from === 'therapist')).toBeTrue();
      done();
    }, 2000);
  });
});
