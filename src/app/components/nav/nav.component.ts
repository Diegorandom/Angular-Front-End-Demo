import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { faAddressCard, faHeartbeat, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faAddressCard = faAddressCard;
  faHeartBeat = faHeartbeat;
  faDollarSign = faDollarSign;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

}
