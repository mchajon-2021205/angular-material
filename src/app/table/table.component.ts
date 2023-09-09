import { Component, ViewChild,OnInit } from '@angular/core';
import { Registros } from '../registros-table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

const  registros: Registros[] = [
  { id: 1, name: "Juan", age: 25 },
  { id: 2, name: "Ana", age: 30 },
  { id: 3, name: "Carlos", age: 22 },
  { id: 4, name: "María", age: 28 },
  { id: 5, name: "Luis", age: 35 },
  { id: 6, name: "Laura", age: 29 },
  { id: 7, name: "Pedro", age: 27 },
  { id: 8, name: "Sofía", age: 31 },
  { id: 9, name: "Miguel", age: 24 },
  { id: 10, name: "Elena", age: 33 },
  { id: 11, name: "Javier", age: 26 },
  { id: 12, name: "Isabel", age: 32 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {



  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new MatTableDataSource<Registros>(registros);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  @ViewChild (MatPaginator, {static: true}) paginator!: MatPaginator
  @ViewChild (MatSort, {static: true}) sort!:MatSort

 

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
 

}
