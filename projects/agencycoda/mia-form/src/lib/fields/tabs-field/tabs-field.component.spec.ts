import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsFieldComponent } from './tabs-field.component';

describe('TabsFieldComponent', () => {
  let component: TabsFieldComponent;
  let fixture: ComponentFixture<TabsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
