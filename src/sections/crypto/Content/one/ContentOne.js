import React from "react"
import Link from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-5/content-img-1.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-l5-1 bg-haiti">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-xl-5 col-lg-6 col-md-9 col-sm-12 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content">
                <div className="section__heading">
                  <h2>The high speed top quick resolution.</h2>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approach to corporate
                    strategy foster collaborative.
                  </p>
                </div>
                <div className="content__btn">
                  <Link to="/" className="btn  btn--link focus-reset">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-6 col-lg-6 col-md-9 col-sm-12 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-image-l5-1">
                <img className="w-100" src={imageOne} alt="crypto content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
