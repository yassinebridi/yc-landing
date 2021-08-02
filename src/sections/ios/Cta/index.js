import React from "react"
import Link from "../../../components/Link"
import ctaImage from "../../../assets/image/landing-7/cta-half-image.png"
import ctaShape from "../../../assets/image/landing-7/green-circle.png"
import appstore from "../../../assets/image/landing-7/apple-store.png"
import playstore from "../../../assets/image/landing-7/apple-store.png"

const CtaSection = ({ ...rest }) => {
  return (
    <div className="cta-area-l7">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row justify-content-center cta-l7-bg">
              <div
                className="col-xxl-6 col-xl-7 col-lg-7 col-md-10"
                data-aos="zoom-in"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <div className="cta-content-l7">
                  <h2 className="text-white">
                    Start achieving exitance with appex theme
                  </h2>
                  <div className="cta-area-btn-group">
                    <Link to="/">
                      <img src={appstore} alt="button" />
                    </Link>
                    <Link to="/">
                      <img src={playstore} alt="button" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-5 col-lg-5 col-md-8 position-relative"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <div className="cta-area-image-group-l7">
                  <div className="image-1">
                    <img src={ctaImage} alt="Cta" />
                  </div>
                  <div className="image-2">
                    <img src={ctaShape} alt="Cta" />
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

export default CtaSection
