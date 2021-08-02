import React from "react"
import Link from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-3/video-main-img.png"
import imageTwo from "../../../../assets/image/landing-3/video-shape-1.png"
import imageThree from "../../../../assets/image/landing-3/video-shape-2.png"
import imagefour from "../../../../assets/image/landing-3/video-shape-3.png"
import imageOneMini from "../../../../assets/image/landing-3/video-tab-1.png"
import imageTwoMini from "../../../../assets/image/landing-3/video-tab-2.png"
import imageThreeMini from "../../../../assets/image/landing-3/video-tab-3.png"
import imagefourMini from "../../../../assets/image/landing-3/video-tab-4.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-l3-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-10 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-box-l3-1">
                <i className="fas fa-users" />
                <div className="section__heading">
                  <h2>Video conference is better, faster.</h2>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approach to corporate
                    strategy foster collaborative thinking.
                  </p>
                </div>
                <Link to="/" className="btn  btn--link focus-reset focus-reset">
                  Learn more
                </Link>
              </div>
            </div>
            <div
              className="offset-xxl-2 col-xl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-10 order-lg-1 order-0"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l3-1-image-group">
                <div className="image-1">
                  <img src={imageOne} alt="content" />
                </div>
                <div className="image-2">
                  <img src={imageTwo} alt="content" />
                </div>
                <div className="image-3">
                  <img src={imageThree} alt="content" />
                </div>
                <div className="image-4">
                  <img src={imagefour} alt="content" />
                </div>
              </div>
              <div className="row justify-content-center video-conference-people">
                <div className="col-lg-3 col-3">
                  <img src={imageOneMini} alt="content" />
                </div>
                <div className="col-lg-3 col-3">
                  <img src={imageTwoMini} alt="content" />
                </div>
                <div className="col-lg-3 col-3">
                  <img src={imageThreeMini} alt="content" />
                </div>
                <div className="col-lg-3 col-3">
                  <img src={imagefourMini} alt="content" />
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
