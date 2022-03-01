import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFilterBoxComponent } from './mia-filter-box.component';

describe('MiaFilterBoxComponent', () => {
  let component: MiaFilterBoxComponent;
  let fixture: ComponentFixture<MiaFilterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFilterBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
