import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoHeaderFieldComponent } from './photo-header-field.component';

describe('PhotoHeaderFieldComponent', () => {
  let component: PhotoHeaderFieldComponent;
  let fixture: ComponentFixture<PhotoHeaderFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoHeaderFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoHeaderFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
