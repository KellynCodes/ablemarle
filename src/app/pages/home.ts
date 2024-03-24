import { Component } from '@angular/core';
import { WhyUs } from './why-us';
import { Service } from './service';
import { Cta } from './cta';
import { Hero } from './hero';

@Component({
  selector: 'ablemarle-home',
  standalone: true,
  imports: [Hero, WhyUs, Service, Cta],
  template: `
    <main id="main">
      <ablemarle-hero />
      <ablemarle-whyus />
      <ablemarle-single-services />
      <ablemarle-cta />
    </main>
  `,
})
export class Home {}
