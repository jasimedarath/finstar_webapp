import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  currentRoute: string = '';
  header: any;

  constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.currentRoute = url[0].path;
    });
  }

}
