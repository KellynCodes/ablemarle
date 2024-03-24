import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Navbar } from './components';

@Component({
  selector: 'ablemarle-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
