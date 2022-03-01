import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFormModalComponent } from './mia-form-modal.component';

describe('MiaFormModalComponent', () => {
  let component: MiaFormModalComponent;
  let fixture: ComponentFixture<MiaFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
