import React from "react"
import Link from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-4/content-1-doc-1.png"
import imageTwo from "../../../../assets/image/landing-4/content-1-shape-1.png"
import imageThree from "../../../../assets/image/landing-4/hero-single-img-1.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content area */}
      <div className="content-area-l4">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-4 col-md-6 col-sm-8"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l4-1-image-group">
                <div className="image-1">
                  <img src={imageOne} alt="Content" />
                </div>
                <div className="image-2">
                  <img src={imageTwo} alt="Content" />
                </div>
                <div className="image-3">
                  <img src={imageThree} alt="Content" />
                </div>
              </div>
            </div>
            <div
              className="offset-lg-2 col-lg-6 col-md-9"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading content-l4-1--content">
                <h2>More than 500+ top doctor are there.</h2>
                <p>
                  With Kareo Telemedicine, you can connect with patients
                  anywhere at anytime. It’s simple, secure and streamlined—and
                  fully reimbursed by private payers.{" "}
                </p>
                <p className="content-l4-p2">
                  With seamless integration to the Kareo EHR and practice
                  management software, you can implement.
                </p>
                <Link to="/" className="btn  btn--link focus-reset focus-reset">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
