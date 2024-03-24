import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about';
import { Home } from './pages/home';
import { OurServices } from './pages/services';

export const routes: Routes = [
  { path: '', component: Home, title: 'AbleMarle' },
  { path: 'about', component: About, title: 'About' },
  { path: 'services', component: OurServices, title: 'About' },
  { path: 'contact', component: Contact, title: 'Contact' },

  { path: '**', redirectTo: '', pathMatch: 'prefix' },
];
