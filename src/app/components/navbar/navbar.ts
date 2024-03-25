import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, inject } from '@angular/core';
import { DOCUMENT, NgIf } from '@angular/common';

@Component({
  selector: 'ablemarle-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
})
export class Navbar {
  document = inject(DOCUMENT);
  isNavOpen: boolean = false;
  isOpen(): void {
    const body = this.document.querySelector('body');
    if (!body) return;
    if (body?.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active');
    } else {
      body?.classList.add('mobile-nav-active');
    }
    this.isNavOpen = !this.isNavOpen;
  }
}
