import { Component } from '@angular/core';

@Component({
  selector: 'ablemarle-single-services',
  standalone: true,
  imports: [],
  template: `
    <!-- ======= Our Services Section ======= -->
    <!-- ======= Our Services Section ======= -->

    <section id="services-list" class="services-list">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Our Services</h2>
        </div>

        <div class="row gy-5">
          <div
            class="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="icon flex-shrink-0">
              <i class="bi bi-briefcase" style="color: #f57813"></i>
            </div>
            <div>
              <h4 class="title">
                <a href="#" class="stretched-link">Medical Outreach Programs</a>
              </h4>
              <p class="description">
                Providing medical camps and outreach initiatives to remote and
                undeserved areas.
              </p>
            </div>
          </div>
          <!-- End Service Item -->

          <div
            class="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="icon flex-shrink-0">
              <i class="bi bi-card-checklist" style="color: #15a04a"></i>
            </div>
            <div>
              <h4 class="title">
                <a href="#" class="stretched-link">Healthcare Education</a>
              </h4>
              <p class="description">
                Conducting workshops and seminars to raise awareness about
                health issues and preventive measures.
              </p>
            </div>
          </div>
          <!-- End Service Item -->

          <div
            class="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="icon flex-shrink-0">
              <i class="bi bi-bar-chart" style="color: #d90769"></i>
            </div>
            <div>
              <h4 class="title">
                <a href="#" class="stretched-link">
                  Patient Support Services
                </a>
              </h4>
              <p class="description">
                Offering financial assistance and support services to patients
                in need.
              </p>
            </div>
          </div>
          <!-- End Service Item -->

          <div
            class="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="icon flex-shrink-0">
              <i class="bi bi-binoculars" style="color: #15bfbc"></i>
            </div>
            <div>
              <h4 class="title">
                <a href="#" class="stretched-link">
                  Community Health Initiatives</a
                >
              </h4>
              <p class="description">
                Collaborating with local organizations and healthcare providers
                to promote community health and wellness.
              </p>
            </div>
          </div>
          <!-- End Service Item -->

          <div
            class="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="icon flex-shrink-0">
              <i class="bi bi-brightness-high" style="color: #f5cf13"></i>
            </div>
            <div>
              <h4 class="title">
                <a href="#" class="stretched-link"
                  >Mental Health Support Programs</a
                >
              </h4>
              <p class="description">
                Offering counseling services and support groups to promote
                mental wellness and resilience.
              </p>
            </div>
          </div>
          <!-- End Service Item -->

          <div
            class="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="icon flex-shrink-0">
              <i class="bi bi-calendar4-week" style="color: #1335f5"></i>
            </div>
            <div>
              <h4 class="title">
                <a href="#" class="stretched-link">
                  Nutrition and Wellness Workshops
                </a>
              </h4>
              <p class="description">
                Providing education on healthy eating habits and lifestyle
                changes for overall wellness.
              </p>
            </div>
          </div>
          <!-- End Service Item -->
        </div>
      </div>
    </section>
    <!-- End Our Services Section -->

    <!-- End Our Services Section -->
  `,
})
export class Service {}
