import { Component, OnInit } from '@angular/core';
import { mockData, formatNumber } from '../../models/mock-data';
import { chain, map, groupBy, sumBy } from 'lodash';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  profitChart: Chart;
  visitsChart: Chart;

  profitChartPointColor = '#deffe0';

  visitChartLineColor = '#f7740a';
  ordersChartLineColor = '#55f355';
  signupsChartLineColor = '#1dc4f1';
  enquiryChartLineColor = '#5c6ff2';
  
  constructor() {}

  ngOnInit() {
    const overviewData = chain(mockData.overview)
      .groupBy('month')
      .map((data, month) => {
        const profitForMonth = sumBy(data, 'profit');
        const visitsForMonth = sumBy(data, 'visitsCount');
        const signupsForMonth = sumBy(data, 'signupsCount');
        const ordersForMonth = sumBy(data, 'ordersCount');
        const enquiresForMonth = sumBy(data, 'enquiresCount');
        return { profit: profitForMonth, month, visitsForMonth, signupsForMonth, ordersForMonth, enquiresForMonth };
      })
      .value();

    this.buildProfitChart(overviewData);
    this.buildStatsChart(overviewData);
  }

  buildProfitChart(profits) {
    this.profitChart = new Chart({
      chart: {
        type: 'column',
        height: 300
      },
      xAxis: {
        categories: profits.map((p) => p.month),
        title: {
          text: '',
        },
        lineWidth: 1,
      },
      yAxis: {
        stackLabels: {
          enabled: true,
          formatter: function () {
            return `<div class="total-profit-label">${formatNumber(
              this.total
            )}</div>`;
          },
        },
        title: {
          text: '',
        },
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 2,
          color: this.profitChartPointColor,
          pointWidth: 15
        },
      },
      legend: {
        enabled: false,
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Profit',
          type: 'column',
          data: profits.map((p) => p.profit),
        },
      ],
    });
  }

  buildStatsChart(overviewData) {
    this.visitsChart = new Chart({
      chart: {
        type: 'column',
        height: 300
      },
      xAxis: {
        categories: overviewData.map((p) => p.month),
        title: {
          text: '',
        },
        lineWidth: 1,
      },
      yAxis: {
        title: {
          text: '',
        },
        gridLineWidth: 1,
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 2,
          pointWidth: 15
        }
      },
      legend: {
        enabled: false,
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      series: [
        { name: 'Visits', type: 'column', data: overviewData.map((p) => p.visitsForMonth), color: this.visitChartLineColor, opacity: 0.6},
        { name: 'New Signups', type: 'column', data: overviewData.map((p) => p.signupsForMonth), color: this.signupsChartLineColor, opacity: 0.6},
        { name: 'New Orders', type: 'column', data: overviewData.map((p) => p.ordersForMonth), color: this.ordersChartLineColor, opacity: 0.6},
        { name: 'New Enquires', type: 'column', data: overviewData.map((p) => p.enquiresForMonth), color: this.enquiryChartLineColor, opacity: 0.6},
      ],
    });
  }
}
