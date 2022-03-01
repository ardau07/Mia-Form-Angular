import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlacesFieldComponent } from './google-places-field.component';

describe('GooglePlacesFieldComponent', () => {
  let component: GooglePlacesFieldComponent;
  let fixture: ComponentFixture<GooglePlacesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglePlacesFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlacesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
