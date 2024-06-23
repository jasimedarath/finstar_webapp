import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from 'src/app/services/api.service';

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
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
})
export class TableComponent implements OnInit {
  @Input() dataUrl: string = '';
  @Input() tableInfo: any;
  @Input() paginationOptions: number[] = [5, 10, 20, 50];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.displayedColumns = this.tableInfo.map(
      (info: { data: any }) => info.data
    );
    this.getData();
  }

  getData() {
    this.apiService.getAll(this.dataUrl).subscribe({
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

  createData(element: any): void {
    const filteredElement = this.filterData(element);
    element.editing = false;
    this.apiService.post(`${this.dataUrl}`, filteredElement).subscribe({
      next: (data: any) => {
        this.getData();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editData(element: any): void {
    const filteredElement = this.filterData(element);
    this.apiService
      .put(this.dataUrl, element.entryId, filteredElement)
      .subscribe({
        next: (data: any) => {
          this.getData();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  deleteData(element: any): void {
    this.apiService.delete(this.dataUrl, element.entryId).subscribe({
      next: (data: any) => {
        this.getData();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addNewRow(): void {
    const newRow = this.tableInfo.reduce(
      (acc: any, info: any) => {
        acc[info.data] = info.type === 'currency' ? 0 : '';
        return acc;
      },
      { editing: false }
    );
    // Add the new row at the top of the data array
    this.dataSource.data = [newRow, ...this.dataSource.data];
    // Add the new row at the end of the data array
   // this.dataSource.data.push(newRow);
   
    this.dataSource.paginator = this.paginator;
  }

  
  enableEdit(element: any): void {
    element.editing = true;
  }

  cancelEdit(element: any): void {
    element.editing = false;
  }

  saveElement(element: any): void {
    if (element.entryId) {
      this.editData(element);
    } else {
      this.createData(element);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterData(element: any): any {
    const editableFields: any = {};
    for (const key in element) {
      if (
        element.hasOwnProperty(key) &&
        this.tableInfo.some((info: any) => info.data === key && info.editable)
      ) {
        editableFields[key] = element[key];
      }
    }
    return editableFields;
  }
}
