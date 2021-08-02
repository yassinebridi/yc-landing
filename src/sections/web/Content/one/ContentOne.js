import React from "react"
import imageOne from "../../../../assets/image/landing-6/content-5-img-1.png"
import imageTwo from "../../../../assets/image/landing-6/content-5-img-2.png"
import imageThree from "../../../../assets/image/landing-6/content-5-img-3.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-l6-1 bg-catskillwhite">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-8 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading-2">
                <h4>Communication</h4>
                <h2>Communicate your vision, share your designs.</h2>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-image-group">
                <div className="image-1">
                  <img src={imageOne} alt="content" />
                </div>
                <div className="image-2">
                  <img src={imageTwo} alt="content" />
                </div>
                <div className="image-3">
                  <img src={imageThree} alt="content" />
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
