
import React from 'react';
import Link  from "../../../components/Link"

import playStoreButton from "../../../assets/image/landing-2/apple-store.png";
import appStoreButton from "../../../assets/image/landing-2/playstore.png";
import imageOne from "../../../assets/image/landing-2/mobile-1.png";
import imageTwo from "../../../assets/image/landing-2/mobile-1-mask.png";
import imageThree from "../../../assets/image/landing-2/mob-chart-1.png";
import imageFour from "../../../assets/image/landing-2/mob-chart-2.png";
import imageFive  from "../../../assets/image/landing-2/mob-chart-3.png";

const HeroSection = ({...rest}) => {
  return (
  <>
      {/* Hero Area */}
    <div className="hero-area-2">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-9 order-lg-0 order-1" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
            <div className="hero-area-content">
              <h2>Take your app
                to the next level</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna.</p>
              <div className="hero-area-btn-group">
                <Link to="/"><img src={playStoreButton} alt="store button" /></Link>
                <Link to="/"><img src={appStoreButton} alt="store button" /></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-9 col-sm-11 order-lg-1 order-0" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
            <div className="hero-area-image-group text-center">
              <div className="image-1">
                <img src={imageOne} alt="Hero" />
              </div>
              <div className="image-2">
                <img src={imageTwo} alt="Hero" />
              </div>
              <div className="image-3">
                <img src={imageThree} alt="Hero" />
              </div>
              <div className="image-4">
                <img src={imageFour} alt="Hero" />
              </div>
              <div className="image-5">
                <img src={imageFive} alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>


  )
}


export default HeroSection;
