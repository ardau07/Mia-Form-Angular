import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPrintFieldsComponent } from './mia-print-fields.component';

describe('MiaPrintFieldsComponent', () => {
  let component: MiaPrintFieldsComponent;
  let fixture: ComponentFixture<MiaPrintFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPrintFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPrintFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
