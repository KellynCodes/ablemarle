import { Component, Input } from '@angular/core';

@Component({
  selector: 'ablemarle-header',
  standalone: true,
  imports: [],
  template: `
    <!-- ======= Breadcrumbs ======= -->
    <div
      class="breadcrumbs d-flex align-items-center"
      style="background-image: url('../../assets/img/patiene-caring.webp');"
    >
      <div
        class="container position-relative d-flex flex-column align-items-center"
      >
        <h2>{{ title }}</h2>
        <ol>
          <li><a routerLink="/">Home</a></li>
          <li>{{ subTitle }}</li>
        </ol>
      </div>
    </div>
    <!-- End Breadcrumbs -->
  `,
})
export class Header {
  @Input({ required: true })
  public title: string = '';

  @Input({ required: true })
  public subTitle: string = '';
}
