import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceFieldComponent } from './list-service-field.component';

describe('ListServiceFieldComponent', () => {
  let component: ListServiceFieldComponent;
  let fixture: ComponentFixture<ListServiceFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
