import React from 'react'
import Link  from "../../../components/Link"
import imageOne from "../../../assets/image/landing-1/integrate-bg.png";
import imageTwo from "../../../assets/image/landing-1/integrate-img-1.png";
import imageThree from "../../../assets/image/landing-1/integrate-img-2.png";
import imageFour from "../../../assets/image/landing-1/integrate-img-3.png";
import imageFive from "../../../assets/image/landing-1/integrate-img-4.png";
import imageSix from "../../../assets/image/landing-1/integrate-img-5.png";
import imageSeven from "../../../assets/image/landing-1/integrate-img-6.png";
import imageEight from "../../../assets/image/landing-1/integrate-img-7.png";
import imageNine from "../../../assets/image/landing-1/integrate-img-8.png";
const IntegrationSection = () => {
    return(
      <>
       {/* Integration Area */}
<div className="integration-area position-relative" data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-xl-6 col-lg-12 col-sm-12 position-static">
        <div className="integration-area-image-group ">
          <div className="image__1">
            <img src={imageOne} alt="integration" />
          </div>
          <div className="image__2">
            <img src={imageTwo} alt="integration" />
          </div>
          <div className="image__3">
            <img src={imageThree} alt="integration" />
          </div>
          <div className="image__4">
            <img src={imageFour} alt="integration" />
          </div>
          <div className="image__5">
            <img src={imageFive} alt="integration" />
          </div>
          <div className="image__6">
            <img src={imageSix} alt="integration" />
          </div>
          <div className="image__7">
            <img src={imageSeven} alt="integration" />
          </div>
          <div className="image__8">
            <img src={imageEight} alt="integration" />
          </div>
          <div className="image__9">
            <img src={imageNine} alt="integration" />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-sm-12 col-md-8">
        <div className="content">
          <div className="section__heading">
            <h2>Integrated with your
              favorite platform </h2>
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

export default IntegrationSection;