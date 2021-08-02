import React from "react"
import Link  from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-1/chart-img-2.png"
import imageTwo from "../../../../assets/image/landing-1/chart-small-img-2.png"

const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
     {/* Content Area-2 */}
<div className="content-area-2">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
        <div className="content-image-group-2">
          <div className="image__1">
            <img className="w-100" src={imageOne} alt="content" />
          </div>
          <div className="image__2">
            <img src={imageTwo} alt="content" />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
        <div className="content">
          <div className="section__heading">
            <h2>Get targeted customers
              to your valuable product.</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat.</p>
          </div>
          <div className="content__btn">
            <Link to="/" className="btn  btn--link focus-reset focus-reset">Learn
              more</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ContentSectionTwo
