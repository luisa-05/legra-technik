import { Component } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // smooth oder 'auto'
      });
  }

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
