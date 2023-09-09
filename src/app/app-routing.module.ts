import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { LlamarDialogComponent } from './llamar-dialog/llamar-dialog.component';
import { TableComponent } from './table/table.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {
    path: 'datePickers',
    component: DatePickerComponent
  },
  {
    path: 'dialog',
    component: LlamarDialogComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
