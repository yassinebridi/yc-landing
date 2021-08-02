import React from "react"
import TestimonialImage from "../../../assets/image/landing-6/testimonial-img-1.png"

const TestimonialSection = ({ ...rest }) => {
  return (
    <div className="mobile-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-area-bg">
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-lg-7 order-lg-2 offset-lg-1"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                >
                  <div className="testimonial-content">
                    <p>
                      <i className="left-quote fas fa-quote-left" />
                      This is an incredible idea. I've been itching for a way to
                      do something like this and communicate my vision to
                      designers. Create your collection, add unlimited sections.{" "}
                      <i className="right-quote fas fa-quote-right" />
                    </p>
                    <div className="user-identity">
                      <h4>Mark Devid</h4>
                      <span>Digital Marketing Expert</span>
                    </div>
                  </div>
                </div>
                <div
                  className="order-lg-1 col-lg-4 col-md-8"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-once="true"
                >
                  <div className="testimonial-main-image">
                    <img src={TestimonialImage} alt="cta" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
