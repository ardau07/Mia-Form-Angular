import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelFieldComponent } from './label-field.component';

describe('LabelFieldComponent', () => {
  let component: LabelFieldComponent;
  let fixture: ComponentFixture<LabelFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
