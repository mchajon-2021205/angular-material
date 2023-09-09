import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-llamar-dialog',
  templateUrl: './llamar-dialog.component.html',
  styleUrls: ['./llamar-dialog.component.scss']
})
export class LlamarDialogComponent {

  titulo: string = 'Dialogo de prueba'
  nombre = new FormControl('', Validators.required)
  input = new FormControl('', Validators.required)
  nombreDialog?: string 

  constructor(public dialog: MatDialog){

  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent,
      {
         data: {titulo: this.titulo, nombre: this.nombre, input: this.input}
      })

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(result !== undefined){
          this.nombreDialog = result.value;
        }
        
      }); 
  }

}
