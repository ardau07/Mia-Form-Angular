import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFieldComponent } from './box-field.component';

describe('BoxFieldComponent', () => {
  let component: BoxFieldComponent;
  let fixture: ComponentFixture<BoxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
