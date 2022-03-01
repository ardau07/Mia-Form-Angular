import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStringFieldComponent } from './list-string-field.component';

describe('ListStringFieldComponent', () => {
  let component: ListStringFieldComponent;
  let fixture: ComponentFixture<ListStringFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStringFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStringFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
