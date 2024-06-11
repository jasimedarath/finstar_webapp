import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { HttpClient } from '@angular/common/http';
import { OrderByPipe } from 'src/common-lib/pipes/order-by.pipe';

@Component({
  selector: 'app-template-container',
  standalone: true,
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
  imports: [CommonModule, TableComponent, OrderByPipe],
})
export class TemplateContainerComponent implements OnInit {

  @Input() category: string = '';
  header: any;
  sections: any;

  constructor(
    private http: HttpClient
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
      },
    });
  }

  getData() {}
}
