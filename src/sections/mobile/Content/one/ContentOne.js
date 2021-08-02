import React from "react"
import Link  from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-2/mobile-4.png"
import imageTwo from "../../../../assets/image/landing-2/mobile-1-mask.png";
import imageThree from "../../../../assets/image/landing-2/mob-chart-1.png";
import imageFour from "../../../../assets/image/landing-2/mobile-4-chart-1.png";
import imageFive from "../../../../assets/image/landing-2/mobile-4-chart-2.png";

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
          {/* Content Area 3*/}
      <div className="content-area-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 order-lg-0 order-1" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
              <div className="content">
                <h2 className="text-haiti">Rank your mobile app on app store.</h2>
                <p className="text-waterloo">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <div className="content__btn">
                  <Link to={"/"} className="btn btn-primary focus-reset">Learn
                    more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 order-lg-1 order-0" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
              <div className="content-area-3-image-group">
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
                  <img src={imageFour} alt="content" />
                </div>
                <div className="image-5">
                  <img src={imageFive} alt="content" />
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
