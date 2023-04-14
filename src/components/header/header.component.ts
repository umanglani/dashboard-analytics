import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tabs: Array<Tab> =  [
    // {id: 'dashboard', title: 'Dashboard', active: true},
    // {id: 'products', title: 'Products', active: false},
    // {id: 'services', title: 'Services', active: false},
    {id: 'contact', title: 'Contact us', active: false},
  ];

  constructor() { }

  ngOnInit() {
  }

  selectTab(tab: Tab) {
    const tabItem = this.tabs.find(t => t.id === tab.id);
    if (tabItem && !tabItem.active) {
      this.tabs.map(t => t.active = false);
      tabItem.active = true;
    }
  }
}