import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamarDialogComponent } from './llamar-dialog.component';

describe('LlamarDialogComponent', () => {
  let component: LlamarDialogComponent;
  let fixture: ComponentFixture<LlamarDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlamarDialogComponent]
    });
    fixture = TestBed.createComponent(LlamarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
