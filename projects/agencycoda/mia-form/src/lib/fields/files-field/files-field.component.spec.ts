import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesFieldComponent } from './files-field.component';

describe('FilesFieldComponent', () => {
  let component: FilesFieldComponent;
  let fixture: ComponentFixture<FilesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
