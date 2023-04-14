import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSidePanelComponent } from "./app-side-panel/app-side-panel.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AnalyticsOverviewComponent } from './analytics-overview/analytics-overview.component';
import { ChartsComponent } from './charts/charts.component';
import { TopPerformersComponent } from './top-performers/top-performers.component';
import { VisitsMapComponent } from './visits-map/visits-map.component';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule, ChartModule, HighchartsChartModule
  ],
  declarations: [AppSidePanelComponent, DashboardComponent, HeaderComponent, AnalyticsOverviewComponent, ChartsComponent, TopPerformersComponent, VisitsMapComponent],
  exports: [AppSidePanelComponent, DashboardComponent, HeaderComponent, AnalyticsOverviewComponent, ChartsComponent, TopPerformersComponent, VisitsMapComponent]
})
export class AppComponentsModule { }