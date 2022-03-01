import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFieldComponent } from './event-field.component';

describe('EventFieldComponent', () => {
  let component: EventFieldComponent;
  let fixture: ComponentFixture<EventFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
