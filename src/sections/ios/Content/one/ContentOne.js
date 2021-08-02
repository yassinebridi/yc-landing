import React from "react"
import imageOne from "../../../../assets/image/landing-7/rank-mobile-1.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-l7-1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-8"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-l7-1-image text-center">
                <div className="image-1">
                  <img src={imageOne} alt="content" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section__heading">
                      <h2>Rank your mobile app on marketplaces.</h2>
                      <p>
                        I neglect my talents. I should be incapable of drawing a
                        single stroke at the present moment; and yet I feel that
                        I never was a greater artist than now.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row widgets-list">
                  <div className="col-lg-12">
                    <button className="btn focus-reset">Try For Free</button>
                  </div>
                  <div className="col-sm-12">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">Fully Responsive Layouts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
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
                  <div className="col-sm-12">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">Reusable Layouts.</p>
                        </div>
                      </div>
                    </div>
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

export default ContentSectionOne
