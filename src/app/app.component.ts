import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbrar navbar-expand navbar-light bg-light">
  <a  class="navbar-brand">{{pageTitle}}</a>
  <ul>
    <li><a  [routerLink]="['/welcome']" class="nav-link">Home</a></li>
    <li><a  [routerLink]="['/products']" class="nav-link">Product</a></li>
  </ul>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
</nav>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';
}
 