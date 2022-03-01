import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringWithColorFieldComponent } from './string-with-color-field.component';

describe('StringWithColorFieldComponent', () => {
  let component: StringWithColorFieldComponent;
  let fixture: ComponentFixture<StringWithColorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringWithColorFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringWithColorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
