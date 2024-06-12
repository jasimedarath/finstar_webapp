import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { Chart, PieController, ArcElement, CategoryScale, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, CategoryScale, Tooltip, Legend);



@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  public pieChartType: ChartType = 'pie';
  public pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  // Pie chart options
  public pieChartOptions = {
    responsive: true
  };


}