import React from "react"
import Link from "../../../components/Link"
import backgroundImage from "../../../assets/image/landing-5/banner-bg.png"

const HeroSection = ({ ...rest }) => {
  return (
    <>
      {/* Hero Area */}
      <div className="hero-area-l5 text-center bg-haiti position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-6 col-xl-7 col-lg-8 col-md-10"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-area-content-l5">
                <div className="hero-area-content-l5__content">
                  <h2>Get started with the best crypto currency service. </h2>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy
                  </p>
                </div>
                <div className="hero-area-content-l5__btn">
                  <Link to="/" className="btn btn--get-start focus-reset">
                    Get Started
                  </Link>
                  <Link to="/" className="btn focus-reset btn--all-feature">
                    All Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-area-l5-image">
                <img className="w-100" src={backgroundImage} alt="Hero area" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
