import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteServiceFieldComponent } from './autocomplete-service-field.component';

describe('AutocompleteServiceFieldComponent', () => {
  let component: AutocompleteServiceFieldComponent;
  let fixture: ComponentFixture<AutocompleteServiceFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteServiceFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteServiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
