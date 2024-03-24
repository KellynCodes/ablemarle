import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'ablemarle-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class Navbar {}
