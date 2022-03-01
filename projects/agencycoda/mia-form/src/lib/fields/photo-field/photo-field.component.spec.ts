import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFieldComponent } from './photo-field.component';

describe('PhotoFieldComponent', () => {
  let component: PhotoFieldComponent;
  let fixture: ComponentFixture<PhotoFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
