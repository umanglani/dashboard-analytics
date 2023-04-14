import { Component, OnInit } from '@angular/core';
import { formatNumber, mockData } from '../../models/mock-data';
import { sumBy } from 'lodash';
import { OverviewDataType } from '../../models/models';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';

@Component({
  selector: 'app-analytics-overview',
  templateUrl: './analytics-overview.component.html',
  styleUrls: ['./analytics-overview.component.scss']
})
export class AnalyticsOverviewComponent implements OnInit {

  overviewData = mockData.overview;
  cards = [];
  arrowIcon = faArrowUp;
  
  constructor() { }

  ngOnInit() {
    this.cards.push({ title: '$' + formatNumber(sumBy(this.overviewData, 'profit')), subtitle: OverviewDataType.profit, detail: '6.5% up from last year' , growth: 'up'});
    this.cards.push({ title: formatNumber(sumBy(this.overviewData, 'visitsCount')), subtitle: OverviewDataType.visits, detail: '15% up from last year' , growth: 'up'});
    this.cards.push({ title: formatNumber(sumBy(this.overviewData, 'signupsCount')), subtitle: OverviewDataType.signups, detail: '9% down from last year' , growth: 'down'});
    this.cards.push({ title: formatNumber(sumBy(this.overviewData, 'ordersCount')), subtitle: OverviewDataType.orders, detail: '13% up from last year' , growth: 'up'});
    this.cards.push({ title: formatNumber(sumBy(this.overviewData, 'enquiresCount')), subtitle: OverviewDataType.enquires, detail: '12% up from last year' , growth: 'up'});
  }

}