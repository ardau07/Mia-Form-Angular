import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFormComponent } from './mia-form.component';

describe('MiaFormComponent', () => {
  let component: MiaFormComponent;
  let fixture: ComponentFixture<MiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
