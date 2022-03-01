import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsAndSelectServiceFieldComponent } from './chips-and-select-service-field.component';

describe('ChipsAndSelectServiceFieldComponent', () => {
  let component: ChipsAndSelectServiceFieldComponent;
  let fixture: ComponentFixture<ChipsAndSelectServiceFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsAndSelectServiceFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsAndSelectServiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
