import React from "react"
import image1 from "../../../../assets/image/landing-3/network-bg.png"
import image2 from "../../../../assets/image/landing-3/chain-img-1.png"
import image3 from "../../../../assets/image/landing-3/chain-img-2.png"
import image4 from "../../../../assets/image/landing-3/chain-img-3.png"
import image5 from "../../../../assets/image/landing-3/chain-img-4.png"
import image6 from "../../../../assets/image/landing-3/chain-img-5.png"
import image7 from "../../../../assets/image/landing-3/chain-img-6.png"
import image8 from "../../../../assets/image/landing-3/smile.png"
import image9 from "../../../../assets/image/landing-3/tongue.png"
import image10 from "../../../../assets/image/landing-3/in-love.png"
import image11 from "../../../../assets/image/landing-3/tongue.png"

const ContentSectionThree = ({ ...rest }) => {
  return (
    <>
      {/* Content Area 3*/}
      <div className="content-area-l3-3">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-5 col-lg-6 col-md-10 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-box-l3-3">
                <i className="fas fa-users" />
                <div className="section__heading">
                  <h2>Connect to every corner of the world.</h2>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6 col-md-10 order-lg-1 order-0"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l3-3-image-group">
                <div className="image-1">
                  <img
                    className="w-100"
                    src={image1}
                   alt="content"
                  />
                </div>
                <div className="image-2">
                  <img
                    className="w-100"
                    src={image2}
                   alt="content"
                  />
                </div>
                <div className="image-3">
                  <img
                    className="w-100"
                    src={image3}
                   alt="content"
                  />
                </div>
                <div className="image-4">
                  <img
                    className="w-100"
                    src={image4}
                   alt="content"
                  />
                </div>
                <div className="image-5">
                  <img
                    className="w-100"
                    src={image5}
                   alt="content"
                  />
                </div>
                <div className="image-6">
                  <img
                    className="w-100"
                    src={image6}
                   alt="content"
                  />
                </div>
                <div className="image-7">
                  <img
                    className="w-100"
                    src={image7}
                   alt="content"
                  />
                </div>
                <div className="image-8">
                  <img
                    className="w-100"
                    src={image8}
                   alt="content"
                  />
                </div>
                <div className="image-9">
                  <img
                    className="w-100"
                    src={image9}
                   alt="content"
                  />
                </div>
                <div className="image-10">
                  <img
                    className="w-100"
                    src={image10}
                   alt="content"
                  />
                </div>
                <div className="image-11">
                  <img
                    className="w-100"
                    src={image11}
                   alt="content"
                  />
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
