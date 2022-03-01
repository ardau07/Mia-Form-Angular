import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionFieldComponent } from './position-field.component';

describe('PositionFieldComponent', () => {
  let component: PositionFieldComponent;
  let fixture: ComponentFixture<PositionFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
