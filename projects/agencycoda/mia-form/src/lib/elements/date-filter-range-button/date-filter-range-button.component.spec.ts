import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFilterRangeButtonComponent } from './date-filter-range-button.component';

describe('DateFilterRangeButtonComponent', () => {
  let component: DateFilterRangeButtonComponent;
  let fixture: ComponentFixture<DateFilterRangeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFilterRangeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFilterRangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
