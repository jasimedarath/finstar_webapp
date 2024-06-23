import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { HttpClient } from '@angular/common/http';
import { OrderByPipe } from 'src/common-lib/pipes/order-by.pipe';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-template-container',
  standalone: true,
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
  imports: [CommonModule, TableComponent, OrderByPipe, MatTabsModule, ChartComponent],
})
export class TemplateContainerComponent implements OnInit {

  @Input() category: string = '';
  header: any;
  sections: any;
  paginationOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ){}  

  ngOnInit() {
    this.getTemplate();
    this.getData();
  }

  ngOnChanges() {
    this.getTemplate();
    this.getData();
  }

  getTemplate() {
    this.http
    .get(`assets/tenants/hd-farms/template-json/${this.category}.json`)
    .subscribe({
      next: (data: any) => {
        this.header = data.header;
        this.sections = data.section;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/404']);
      },
    });
  }

  getData() {}
}
