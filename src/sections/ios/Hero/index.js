import React from "react"
import Link from "../../../components/Link"
import Image1 from "../../../assets/image/landing-7/mobile-hand.png"
import Image2 from "../../../assets/image/landing-3/video-shape-2.png"
import Image3 from "../../../assets/image/landing-7/hero-group-img-2.png"
import Image4 from "../../../assets/image/landing-7/hero-group-img-3.png"
import Image5 from "../../../assets/image/landing-7/hero-group-img-3-shape.png"
import appstore from "../../../assets/image/landing-2/apple-store.png"
import playstore from "../../../assets/image/landing-2/playstore.png"

const HeroSection = ({ ...rest }) => {
  return (
    <>
      {/* Hero Area */}
      <div className="hero-area-7">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-7 col-md-10"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-area-content-l7 text-center">
                <h2>Better way to promote your app</h2>
                <p>
                  Latin contentus presumably developed from the more literal
                  meaning self-contained, restrained, held in.
                </p>
                <div className="hero-area-group-btn">
                  <Link to="/">
                    <img src={appstore} alt="app store" />
                  </Link>
                  <Link to="/">
                    <img src={playstore} alt="play store" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-8 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-area-image-group-l7 d-flex justify-content-between">
                <div className="image-1">
                  <img className="w-100" src={Image1} alt="hero" />
                  <div className="shape">
                    <img src={Image2} alt=" ios hero" />
                  </div>
                </div>
                <div className="image-2 d-none d-md-block">
                  <img className="w-100" src={Image3} alt=" ios hero" />
                </div>
                <div className="image-3">
                  <img className="w-100" src={Image4} alt=" ios hero" />
                  <div className="shape">
                    <img className="w-100" src={Image5} alt=" ios hero" />
                  </div>
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
