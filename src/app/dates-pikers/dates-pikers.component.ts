import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS2 } from '../formato-fehca';

@Component({
  selector: 'app-dates-pikers',
  templateUrl: './dates-pikers.component.html',
  styleUrls: ['./dates-pikers.component.scss'],
  providers: [
     {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS2},
  ]
})
export class DatesPikersComponent {

  date = new FormControl(moment())
  mostrarFecha = this.date

} 
