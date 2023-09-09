import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    
  ]

})
export class DatePickerComponent {
  fecha = new FormControl('')
  startControl = new FormControl('')
  endControl = new FormControl('')

  fechaMaxima?: string
  minDate: Date = new Date('2023-01-01')
  maxDate: Date = new Date()
  month = new FormControl('')
} 
