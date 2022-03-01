import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServiceFieldComponent } from './select-service-field.component';

describe('SelectServiceFieldComponent', () => {
  let component: SelectServiceFieldComponent;
  let fixture: ComponentFixture<SelectServiceFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectServiceFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectServiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
