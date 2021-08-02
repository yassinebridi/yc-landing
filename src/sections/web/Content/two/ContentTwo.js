import React from "react"
import imageOne from "../../../../assets/image/landing-6/content-6-img-2.png"
import imageTwo from "../../../../assets/image/landing-6/content-6-img-3.png"
import imageThree from "../../../../assets/image/landing-6/content-6-img-1.png"
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* Content Area 2*/}
      <div className="content-area-l6-2 bg-catskillwhite">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-8"
              data-aos="fade-right"
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
            <div
              className="col-lg-6 col-md-9"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading-2">
                <h4>User Interface</h4>
                <h2>Create your own collect add unlimited select.</h2>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionTwo
