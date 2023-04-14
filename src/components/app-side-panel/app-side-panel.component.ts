import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears';
import { faQrcode } from '@fortawesome/free-solid-svg-icons/faQrcode';
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt';

@Component({
  selector: 'app-side-panel',
  templateUrl: './app-side-panel.component.html',
  styleUrls: ['./app-side-panel.component.scss']
})
export class AppSidePanelComponent implements OnInit {

  panelItems = [{icon: faTable, active: true}, {icon: faSearch, active: false}, {icon: faUserAlt, active: false}, {icon: faBell, active: false}, {icon: faGears, active: false}];
  socialItems = [faFacebook, faInstagram, faTwitter, faGoogle];

  constructor() { }

  ngOnInit() {
  }

}