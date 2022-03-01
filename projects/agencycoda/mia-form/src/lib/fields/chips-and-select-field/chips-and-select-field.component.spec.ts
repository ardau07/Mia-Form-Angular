import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsAndSelectFieldComponent } from './chips-and-select-field.component';

describe('ChipsAndSelectFieldComponent', () => {
  let component: ChipsAndSelectFieldComponent;
  let fixture: ComponentFixture<ChipsAndSelectFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsAndSelectFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsAndSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
