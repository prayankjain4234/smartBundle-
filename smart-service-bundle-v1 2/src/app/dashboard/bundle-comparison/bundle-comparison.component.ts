import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bundle-comparison',
  templateUrl: './bundle-comparison.component.html',
  styleUrls: ['./bundle-comparison.component.css']
})
export class BundleComparisonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  public pieChartLabels: string[] = ['Male', 'Female'];
  public pieChartData: number[] = [51, 30];
  public pieChartType: any = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
