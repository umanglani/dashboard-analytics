import { Component, OnInit } from '@angular/core';
import Highcharts from "highcharts/highmaps";
import { countryCodes } from '../../assets/map-data';
import { topology } from '../../assets/world-map-topology';
import { mockData } from '../../models/mock-data';

@Component({
  selector: 'app-visits-map',
  templateUrl: './visits-map.component.html',
  styleUrls: ['./visits-map.component.scss']
})
export class VisitsMapComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartOptions;

  constructor() { }

  ngOnInit() {

    const cc = countryCodes;
    const chartData = [];
    cc.map( (code, i) => {
      const visitNode = mockData.overview.find(o => o.country.code === code);
        chartData.push([code, visitNode ? visitNode.visitsCount : 0]);
    });

    this.chartOptions = {
      chart: {
        map: topology
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: "spacingBox"
        }
      },
      legend: {
        enabled: false
      },
      colorAxis: {
        min: 0
      },
      mapView: {
        fitToGeometry: {
            type: 'MultiPoint',
            coordinates: [
                // Alaska west
                [-164, 54],
                // Greenland north
                [-35, 84],
                // New Zealand east
                [179, -38],
                // Chile south
                [-68, -55]
            ]
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: "map",
          name: "Visits",
          states: {
            hover: {
              color: "#BADA55"
            }
          },
          dataLabels: {
            enabled: false,
            format: "{point.name}"
          },
          allAreas: true,
          data: chartData
        }
      ]
    };
  }

}