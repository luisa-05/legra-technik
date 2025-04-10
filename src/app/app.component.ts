import { Component } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}

  isHomeRouteActive(): boolean {
    return this.router.url === '/'; // exakt
  }

  isAboutUsRouteActive(): boolean {
    return this.router.url === '/about-us';
  }

  isContactRouteActive(): boolean {
    return this.router.url === '/contact';
  }
}
