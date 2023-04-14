import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponentsModule } from './components/app-components.module';
import { mockData } from './models/mock-data';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppComponentsModule],
  template: `<app-dashboard></app-dashboard>`,
})
export class App implements OnInit {
  data = mockData;

  ngOnInit() {
  }
}

bootstrapApplication(App);
