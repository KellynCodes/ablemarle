import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ablemarle-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action" class="call-to-action">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <h3>Contact Us Today</h3>
            <p>
              Ready to make a difference? Join us in our mission to build a
              healthier future for all. Donate today and be a catalyst for
              positive change in our community.
            </p>
            <a class="cta-btn" routerLink="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Call To Action Section -->
  `,
})
export class Cta {}
