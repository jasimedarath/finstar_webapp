import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { Chart, PieController, BarController, LineController, DoughnutController, BubbleController, PolarAreaController, RadarController, ArcElement, BarElement, LineElement, PointElement, LinearScale, CategoryScale, RadialLinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, BarController, LineController, DoughnutController, BubbleController, PolarAreaController, RadarController, ArcElement, BarElement, LineElement, PointElement, LinearScale, CategoryScale, RadialLinearScale, Tooltip, Legend);




@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() chartType: ChartType = 'pie'; // This can be 'line', 'doughnut', 'bubble', 'polarArea', 'radar', etc.
  @Input() labels: any = [];
  @Input() data: any= [30, 50, 10, 20, 10, 50, 57];
  public chartColors: Array<string> = ['#EE6834', '#98A2EB', '#CCFE56',' #FF8895', '#36B6EB', '#EEFC90'];
  public chartData = {
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        backgroundColor: this.chartColors,
        hoverBackgroundColor: this.chartColors
      }
    ]
  };

  public chartOptions = {
    responsive: true
  };


}