import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `{{title}}
  <h1>Zdravo Aco </h1>
  <pm-products></pm-products>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';
}
 