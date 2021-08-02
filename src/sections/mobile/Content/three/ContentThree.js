import React from "react"
import Link from "../../../../components/Link"
import Background from "../../../../assets/image/landing-2/cta-bg.png"
import appStore from "../../../../assets/image/landing-2/app_store-black.png"
import googleStore from "../../../../assets/image/landing-2/play_store_black.png"
import imageOne from "../../../../assets/image/landing-2/cta-mobile-1.png"
import imageTwo from "../../../../assets/image/landing-2/cta-mobile-2.png"

const ContentSectionThree = ({ ...rest }) => {
  return (
    <>
      {/* CTA Area  */}
      <div
        className="cta-area bg-position "
        style={{ background: `url(${Background})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-8"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="cta-content">
                <h2 className="text-white">
                  Download the app now &amp; use it.
                </h2>
                <div className="cta-area-btn-group">
                  <Link to="/">
                    <img
                      src={appStore}
                      alt="content"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src={googleStore}
                      alt="content"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-8 position-relative"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="cta-area-image-group">
                <div className="image-1">
                  <img src={imageOne} alt="cta" />
                </div>
                <div className="image-2">
                  <img src={imageTwo} alt="cta" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionThree
