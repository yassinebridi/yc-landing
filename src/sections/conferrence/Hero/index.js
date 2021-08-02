
import React from 'react';
import Link from '../../../components/Link'
import backgroundImage from "../../../assets/image/landing-3/hero-bg.png";
import shape from "../../../assets/image/landing-3/hero-circle.png";
import imageOne from "../../../assets/image/landing-3/hero-img-1.png";
import imageTwo from "../../../assets/image/landing-3/hero-img-2.png";

const HeroSection = ({...rest}) => {
  return (
    <>
      {/* Hero Area */}
<div className="hero-area-l3 bg-bunting-aprx bg-position " style={{backgroundImage: `url(${backgroundImage})`}}>
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6 col-md-10 order-lg-0 order-1" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
        <div className="hero-area-l3__content">
          <h2>Free Conference Calls
            &amp; Online Meetings.</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approval.</p>
          <Link to="/" className="btn focus-reset">Try 14 Days Free Trial</Link>
        </div>
      </div>
      <div className="col-lg-6 col-md-10 order-lg-1 order-0" data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
        <div className="hero-area-l3-image-group">
          <div className="image-1">
            <img className="w-100" src={shape} alt="hero" />
          </div>
          <div className="image-2">
            <img src={imageOne} alt="hero" />
          </div>
          <div className="image-3">
            <img src={imageTwo} alt="hero " />
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
