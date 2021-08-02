import React from "react"
import conentImage from "../../../../assets/image/landing-8/benefit-img.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-l8-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-10"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-l8-1__image">
                <img src={conentImage} alt="content" />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content content--l8-1">
                <h2>Grow your website speed with us.</h2>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
