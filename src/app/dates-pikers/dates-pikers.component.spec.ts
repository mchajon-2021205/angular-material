import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesPikersComponent } from './dates-pikers.component';

describe('DatesPikersComponent', () => {
  let component: DatesPikersComponent;
  let fixture: ComponentFixture<DatesPikersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatesPikersComponent]
    });
    fixture = TestBed.createComponent(DatesPikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
