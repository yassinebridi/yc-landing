import React from "react"
import Link from "../../../components/Link"
import dotImages from "../../../assets/image/landing-6/banner-bg-dot.png"
import Image1 from "../../../assets/image/landing-6/Dashboard.png"
import Image2 from "../../../assets/image/landing-6/Card.png"
import Image3 from "../../../assets/image/landing-6/Widget.png"

const HeroSection = ({ ...rest }) => {
  return (
    <>
      {/* Hero Area */}
      <div className="hero-area-6 hero--area-curve__2 bg-bunting-aprx">
        <div className="container">
          <div className="dot-image">
            <img src={dotImages} alt="shape hero" />
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-10 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-area-content">
                <h2 className="text-white">Fast, easy website prototyping. </h2>
                <p className="text-lynch">
                  A formal meeting of people with a shared interest, typically
                  one that takes place rapidly.
                </p>
                <div className="hero-area__btn">
                  <Link
                    to="/"
                    className="btn  bg-primary focus-reset text-white"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-11 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-area-image-group">
                <div className="image-1">
                  <img src={Image1} alt="hero" />
                </div>
                <div className="image-2">
                  <img src={Image2} alt="hero" />
                </div>
                <div className="image-3">
                  <img src={Image3} alt="hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
