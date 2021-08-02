import React from "react"
import Link from "../../../components/Link"
import heroImage from "../../../assets/image/landing-8/hero-image.png"

const HeroSection = ({ ...rest }) => {
  return (
    <>
      {/* Hero Area */}
      <div className="hero-area-l8">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-10 order-lg-0 order-1"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-content hero-content--8">
                <h2>Skyrocket your website speed today.</h2>
                <p>
                  Our powerful hosting server helps your website to boost the
                  page speed on max level.
                </p>
                <div className="hero-content--8__btn">
                  <Link
                    to="/"
                    className="btn  bg-primary focus-reset text-white"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-11 order-lg-1 order-0"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-area-l8__image">
                <img src={heroImage} alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
