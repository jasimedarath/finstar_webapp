import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userData: any;
  userDetailsString: any;
  userDetails: any;

  ngOnInit() {
    this.userDetailsString = sessionStorage.getItem('userDetails');
    this.userDetails = JSON.parse(this.userDetailsString);
  }
}
