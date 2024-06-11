import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    FormsModule 
  ],
})
export class TableComponent implements OnInit {
  @Input() dataUrl: string = '';
  @Input() tableInfo: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.displayedColumns = this.tableInfo.map((info: { data: any }) => info.data);
    this.getData();
  }

  getData() {
    this.http.get(`${this.dataUrl}`).subscribe({
      next: (data: any) => {
        this.dataSource.data = data.data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editElement(element: any): void {
    element.editing = true;
  }

  saveElement(element: any): void {
    element.editing = false;
    // Optionally, make an HTTP request to save changes to the server
    console.log('Element saved', element);
  }

  cancelEdit(element: any): void {
    element.editing = false;
    // Optionally, revert changes if needed
    console.log('Edit canceled', element);
  }

  deleteElement(element: any): void {
    console.log('Delete element', element);
    // Handle delete action
  }

  addNewRow(): void {
    const newRow = this.tableInfo.reduce((acc: any, info: any) => {
      acc[info.data] = info.type === 'currency' ? 0 : '';
      return acc;
    }, { editing: false });

    this.dataSource.data = [newRow, ...this.dataSource.data];
    this.dataSource.paginator = this.paginator; // Ensure paginator updates
  }

}
