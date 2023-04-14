import { Component, OnInit } from '@angular/core';
import { mockData } from '../../models/mock-data';
import { max } from 'lodash';

@Component({
  selector: 'app-top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.scss']
})
export class TopPerformersComponent implements OnInit {

  performers = mockData.topPerformers;

  maxRevenue = 0;

  constructor() { }

  ngOnInit() {
    this.maxRevenue = max(this.performers.map(p => p.income));
  }

}