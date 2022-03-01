import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSelectorFieldComponent } from './color-selector-field.component';

describe('ColorSelectorFieldComponent', () => {
  let component: ColorSelectorFieldComponent;
  let fixture: ComponentFixture<ColorSelectorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSelectorFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSelectorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
