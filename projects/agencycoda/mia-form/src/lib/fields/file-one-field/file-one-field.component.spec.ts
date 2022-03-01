import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOneFieldComponent } from './file-one-field.component';

describe('FileOneFieldComponent', () => {
  let component: FileOneFieldComponent;
  let fixture: ComponentFixture<FileOneFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileOneFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileOneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
