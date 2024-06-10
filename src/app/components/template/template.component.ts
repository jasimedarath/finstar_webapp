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
      this.getData();
    });
  }

  getData() {
    this.http
      .get(`assets/tenants/hd-farms/template-json/${this.currentRoute}.json`)
      .subscribe({
        next: (data: any) => {
          const dataFetched = data.leftPaneItems;
          this.header = dataFetched.header;
        },
        error: (error) => {
          this.router.navigate(['/404']);
          console.log(error);
        },
      });
  }

}
