import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithChipServiceFieldComponent } from './input-with-chip-service-field.component';

describe('InputWithChipServiceFieldComponent', () => {
  let component: InputWithChipServiceFieldComponent;
  let fixture: ComponentFixture<InputWithChipServiceFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithChipServiceFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithChipServiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
