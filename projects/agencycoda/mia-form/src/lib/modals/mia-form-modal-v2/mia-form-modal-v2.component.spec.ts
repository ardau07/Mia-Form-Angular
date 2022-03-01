import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFormModalV2Component } from './mia-form-modal-v2.component';

describe('MiaFormModalV2Component', () => {
  let component: MiaFormModalV2Component;
  let fixture: ComponentFixture<MiaFormModalV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFormModalV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFormModalV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
