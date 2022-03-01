import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFieldComponent } from './gallery-field.component';

describe('GalleryFieldComponent', () => {
  let component: GalleryFieldComponent;
  let fixture: ComponentFixture<GalleryFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
