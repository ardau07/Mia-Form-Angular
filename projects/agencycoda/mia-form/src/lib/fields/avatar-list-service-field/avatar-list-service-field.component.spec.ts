import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarListServiceFieldComponent } from './avatar-list-service-field.component';

describe('AvatarListServiceFieldComponent', () => {
  let component: AvatarListServiceFieldComponent;
  let fixture: ComponentFixture<AvatarListServiceFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarListServiceFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarListServiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
