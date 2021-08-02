import React from "react"
import image1 from "../../../../assets/image/landing-5/content-img-2.png"

const ContentSectionThree = ({ ...rest }) => {
  return (
    <>
      {/* Content Area 3*/}
      <div className="content-area-l5-3 bg-haiti">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-xl-5 col-lg-6 col-md-9 col-sm-12 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-box">
                <div className="section__heading">
                  <h2>The high speed top quick resolution.</h2>
                </div>
                <div className="content-l5-3-feature">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="fas fa-chart-line" />
                    </div>
                    <div className="content">
                      <h4>Scale Business</h4>
                      <p>
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-l5-3-feature">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="text-secondary fas fa-lock" />
                    </div>
                    <div className="content">
                      <h4>Maintain Security</h4>
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hero-area-content-l5__btn">
                  <button className="btn btn--get-start focus-reset">
                    Get Started
                  </button>
                  <button className="btn focus-reset btn--all-feature">
                    All Features
                  </button>
                </div>
              </div>
            </div>
            <div
              className="offset-xl-2 col-xl-5 col-lg-6 col-md-9 col-sm-12 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-image-l5-3">
                <img className="w-100" src={image1} alt="content three" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionThree
