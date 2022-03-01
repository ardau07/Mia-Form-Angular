import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringTitleFieldComponent } from './string-title-field.component';

describe('StringTitleFieldComponent', () => {
  let component: StringTitleFieldComponent;
  let fixture: ComponentFixture<StringTitleFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringTitleFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringTitleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
