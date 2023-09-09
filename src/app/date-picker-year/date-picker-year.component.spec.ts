import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerYearComponent } from './date-picker-year.component';

describe('DatePickerYearComponent', () => {
  let component: DatePickerYearComponent;
  let fixture: ComponentFixture<DatePickerYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerYearComponent]
    });
    fixture = TestBed.createComponent(DatePickerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
