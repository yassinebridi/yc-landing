import React from "react"
import Link from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-2/mobile-22.png"
import imageTwo from "../../../../assets/image/landing-2/mobile-1-mask.png"
import imageThree from "../../../../assets/image/landing-2/mobile-2-chart-1.png"
import imageFour from "../../../../assets/image/landing-2/mobile-2-chart-2.png"

const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* Content Area 4*/}
      <div className="content-area-4">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-8"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-4-image-group text-center">
                <div className="image-1">
                  <img src={imageOne} alt="content two" />
                </div>
                <div className="image-2">
                  <img src={imageTwo} alt="content two" />
                </div>
                <div className="image-3">
                  <img src={imageThree} alt="content two" />
                </div>
                <div className="image-4">
                  <img src={imageFour} alt="content two" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-8"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section__heading">
                      <h2 className="text-haiti">
                        Take your best decision right now.
                      </h2>
                      <p className="text-waterloo">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row widgets-list">
                  <div className="col-sm-6">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">Easy to Use Layouts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">Based on Bootstrap Grid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">Fully Responsive</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">Free Google Fonts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <Link to="/" className="btn focus-reset btn-reset">
                      Get Started Now
                    </Link>
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

export default ContentSectionTwo
