import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-nav-modal',
  imports: [RouterLink],
  templateUrl: './nav-modal.component.html',
  styleUrl: './nav-modal.component.scss',
})
export class NavModalComponent {
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  closeModal() {
    const prev = this.navigationService.getPreviousUrl();
    if (prev) {
      this.router.navigateByUrl(prev);
    } else {
      this.router.navigate(['/']); // Fallback, falls keine vorherige URL bekannt
    }
  }
}
