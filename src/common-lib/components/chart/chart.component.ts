import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { Chart, PieController, BarController, LineController, DoughnutController, BubbleController, PolarAreaController, RadarController, ArcElement, BarElement, LineElement, PointElement, LinearScale, CategoryScale, RadialLinearScale, Tooltip, Legend } from 'chart.js';
import { ApiService } from 'src/app/services/api.service';

Chart.register(PieController, BarController, LineController, DoughnutController, BubbleController, PolarAreaController, RadarController, ArcElement, BarElement, LineElement, PointElement, LinearScale, CategoryScale, RadialLinearScale, Tooltip, Legend);




@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit{
  @Input() dataUrl: string = '';
  @Input() chartType: ChartType = 'pie'; // This can be 'line', 'doughnut', 'bubble', 'polarArea', 'radar', etc.
  @Input() labels: any = [];
  data: any= [];
  public chartColors: Array<string> = ['#085026', '#003366', '#800000', '#cc3300', '#98A2EB', '#CCFE56',' #FF8895', '#36B6EB', '#EEFC90'];
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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this.apiService.getAll(this.dataUrl).subscribe({
      next: (data: any) => {
        this.labels = data.data.map((item: any) => item.investor);
        this.data = data.data.map((item: any) => item.totalAmount);
        this.chartData.labels = this.labels;
        this.chartData.datasets[0].data = this.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}