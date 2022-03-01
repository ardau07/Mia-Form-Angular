import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFieldComponent } from './city-field.component';

describe('CityFieldComponent', () => {
  let component: CityFieldComponent;
  let fixture: ComponentFixture<CityFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
