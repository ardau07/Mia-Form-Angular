import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFormModalV3Component } from './mia-form-modal-v3.component';

describe('MiaFormModalV3Component', () => {
  let component: MiaFormModalV3Component;
  let fixture: ComponentFixture<MiaFormModalV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFormModalV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFormModalV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
