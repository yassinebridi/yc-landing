import React from "react"
import Link from "../../../components/Link"
export default function BannerSection() {
  return (
    <div className="about-us-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-7 col-xl-8 col-lg-9"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="about-us-banner-content text-center">
              <h2>We help business to grow their customer base</h2>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking.
              </p>
              <Link to="/contact-us" className="btn focus-reset">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
