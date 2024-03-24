import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { Service } from './service';
import { Header } from '../components/header';

@Component({
  selector: 'ablemarle-all-services',
  standalone: true,
  imports: [RouterLink, Header, Service],
  template: `
    <ablemarle-header title="Our Services" subTitle="Services" />
    <ablemarle-single-services />
  `,
})
export class OurServices {}
