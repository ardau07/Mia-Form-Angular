import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCustomFieldComponent } from './example-custom-field.component';

describe('ExampleCustomFieldComponent', () => {
  let component: ExampleCustomFieldComponent;
  let fixture: ComponentFixture<ExampleCustomFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCustomFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
