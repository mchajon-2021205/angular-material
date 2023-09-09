import { Component, DoCheck } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements DoCheck{

  fecha = new FormControl('', Validators.required)
  fechaActual = new Date()
  acertado?: boolean 
  nombre = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])
  DPI = false

  validarFecha(valor: any){
    if(valor.value < this.fechaActual){
      return this.acertado = false
    }else{
      return this.acertado = true
    }
  }


  mostrarDPI(event: any){
    this.DPI = event.checked
  }

  ngDoCheck(): void {
    this.validarFecha(this.fecha)
  }

}
