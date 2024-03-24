import { Component } from '@angular/core';
import { Header } from '../components/header';

@Component({
  selector: 'ablemarle-about',
  standalone: true,
  imports: [Header],
  template: `
    <ablemarle-header title="About" subTitle="About Us" />
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4" data-aos="fade-up">
          <div class="col-lg-4">
            <img src="assets/img/about.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8">
            <div class="content ps-lg-5">
              <h3>Empowering Health, Enriching Lives</h3>
              <p>
                AlbeMarle Hospital Foundation is a non-profit organization
                dedicated to supporting AlbeMarle Hospital in its mission to
                provide accessible and high-quality healthcare services to all
                members of our community. Founded in [year], our foundation has
                been instrumental in funding critical medical equipment,
                supporting research endeavors, and implementing community
                outreach programs aimed at promoting wellness and preventive
                care.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle-fill"></i>AlbeMarle Hospital
                  Foundation is dedicated to enhancing community health through
                  compassion, innovation, and advocacy.
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i> Integrity, compassion,
                  and collaboration guide our actions as we strive for a
                  healthier, more equitable society.
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>From financial
                  assistance to community health initiatives, our efforts have
                  led to tangible improvements in healthcare access and
                  outcomes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->
  `,
})
export class About {}
