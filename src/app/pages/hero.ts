import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'ablemarle-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-4">
            <h2 data-aos="fade-up">Empowering Health, Transforming Lives</h2>
            <blockquote data-aos="fade-up" data-aos-delay="100">
              <p>
                Welcome to AlbeMarle Hospital Foundation, where every
                contribution makes a difference in empowering health and
                transforming lives.
              </p>
            </blockquote>
            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a routerLink="/about" class="btn-get-started">About Us</a>
              <a
                routerLink="/contact"
                class="btn-get-started"
                style="margin-left: 1rem"
                >Contact Us</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
