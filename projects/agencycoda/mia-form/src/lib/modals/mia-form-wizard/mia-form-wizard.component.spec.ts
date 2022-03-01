import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFormWizardComponent } from './mia-form-wizard.component';

describe('MiaFormWizardComponent', () => {
  let component: MiaFormWizardComponent;
  let fixture: ComponentFixture<MiaFormWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFormWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFormWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
