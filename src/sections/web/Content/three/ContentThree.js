import React from "react"
import Link from "../../../../components/Link"
import image1 from "../../../../assets/image/landing-6/dashboard-img.png"

const ContentSectionThree = ({ ...rest }) => {
  return (
    <>
      {/* Content Area 3*/}
      <div className="content-area-l6-3">
        <div className="container dashboard-bg">
          <div className="row">
            <div
              className="col-xl-11 col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <h2>
                Show off your goods in elegant product cards and make more sales
                while chatting.
              </h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content">
                <p>
                  Mix and match the best parts of the best websites Build
                  prototypes with thousands of components. All sources from the
                  best websites in the industry.
                </p>
                <p>
                  Fast, easy website prototyping for everyone Easily create
                  website prototypes with thousands of real website components.
                  No design skills needed!
                </p>
                <div className="content-area__btn">
                  <Link
                    to="/"
                    className="btn text-primary bg-white focus-reset"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="offset-lg-1 col-lg-5"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-image">
                <img src={image1} alt="web content 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionThree
