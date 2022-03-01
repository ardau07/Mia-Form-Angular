import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesFieldComponent } from './images-field.component';

describe('ImagesFieldComponent', () => {
  let component: ImagesFieldComponent;
  let fixture: ComponentFixture<ImagesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
