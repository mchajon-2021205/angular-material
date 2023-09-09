import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DialogComponent } from './dialog/dialog.component';
import { LlamarDialogComponent } from './llamar-dialog/llamar-dialog.component'
import { TableComponent } from './table/table.component';
import { DatesPikersComponent } from './dates-pikers/dates-pikers.component';
import { DatePickerYearComponent } from './date-picker-year/date-picker-year.component';
import { StepperComponent } from './stepper/stepper.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    DialogComponent,
    LlamarDialogComponent,
    TableComponent,
    DatesPikersComponent,
    DatePickerYearComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  bootstrap: [AppComponent],
  providers: [
   
  ]
})
export class AppModule { }
