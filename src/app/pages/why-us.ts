import { Component } from '@angular/core';

@Component({
  selector: 'ablemarle-whyus',
  standalone: true,
  imports: [],
  template: `
    <!-- ======= Why Choose Us Section ======= -->
    <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Why Choose Us</h2>
        </div>

        <div class="row g-0" data-aos="fade-up" data-aos-delay="200">
          <div
            class="col-xl-5 img-bg"
          ></div>
          <div class="col-xl-7 slides  position-relative">
            <div class="slides-1 swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Legacy of Impact</h3>

                    <p>
                      With a rich history of serving our community, AlbeMarle
                      Hospital Foundation has built a legacy of impact that
                      spans generations. From pioneering medical advancements to
                      providing compassionate care to those in need, our
                      foundation has consistently been at the forefront of
                      healthcare innovation and advocacy. When you partner with
                      us, you become part of a legacy of compassion and
                      excellence that continues to shape the future of
                      healthcare.
                    </p>
                  </div>
                </div>
                <!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Holistic Approach to Health:</h3>

                    <p>
                      Unlike traditional healthcare organizations, we take a
                      holistic approach to health that goes beyond just treating
                      illnesses. Our comprehensive programs address the
                      physical, mental, and social determinants of health,
                      empowering individuals to lead fulfilling and healthy
                      lives. By focusing on prevention and wellness, we strive
                      to create lasting positive change in our community.
                    </p>
                  </div>
                </div>
                <!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h4 class="mb-3">Community-Centered Approach</h4>
                    <p>
                      At AlbeMarle Hospital Foundation, we prioritize our
                      community's needs above all else. Our tailored programs
                      and initiatives are designed to address specific
                      healthcare challenges faced by our neighbors, ensuring
                      that everyone has access to the care and support they
                      deserve.
                    </p>
                  </div>
                </div>
                <!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Innovative Solutions:</h3>

                    <p>
                      We're not just committed to maintaining the status quo;
                      we're dedicated to pushing boundaries and finding
                      innovative solutions to healthcare issues. Through
                      strategic partnerships and forward-thinking approaches,
                      we're continuously exploring new ways to improve health
                      outcomes and make a lasting impact on our community.
                    </p>
                  </div>
                </div>
                <!-- End slide item -->
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Choose Us Section -->
  `,
})
export class WhyUs {}
