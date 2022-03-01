import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeRadioFieldComponent } from './size-radio-field.component';

describe('SizeRadioFieldComponent', () => {
  let component: SizeRadioFieldComponent;
  let fixture: ComponentFixture<SizeRadioFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeRadioFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeRadioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
