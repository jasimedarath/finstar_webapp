import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.scss'],
})
export class LeftpaneComponent implements OnInit {
  menuItems: any;
  version: any;
  logoPath: any;
  imagePath: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getleftPaneItems();
  }
  getleftPaneItems() {
    this.http
      .get('assets/tenants/hd-farms/template-json/left-pane.json')
      .subscribe({
        next: (data: any) => {
          const leftPaneItems = data.leftPaneItems;
          this.version = leftPaneItems.version;
          this.logoPath = leftPaneItems.logoPath;
          this.imagePath = leftPaneItems.imagePath;
          this.menuItems = leftPaneItems.group;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
