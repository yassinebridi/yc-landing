
import React from 'react';
import Link from "../../../components/Link"
import imageOne from "../../../assets/image/landing-1/hero-bg-1.png";
import imageTwo from "../../../assets/image/landing-1/laptop-img-1.png";

export default function HeroSection ({data}) {
  return (
  <div className="hero-area hero--area-curve text-center bg-position  position-relative" style={{background: `url(${imageOne})`}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-10" data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
          <div className="hero-area-content">
            <div className="badge">
              <h6 className="bg-bunting"><span className="badge-offer text-white bg-primary">Offer</span><span className="text-porcelain">25% off for this month</span></h6>
            </div>
            <div className="hero-area__title">
              <h2 className="text-white">Promote your web app
                seamlessly with us</h2>
            </div>
            <div className="hero-area__btn">
              <Link to="/" className="btn btn--lg bg-secondary focus-reset text-white">Get Started Now</Link>
            </div>
            <div className="hero-area__image">
              <img src={imageTwo} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

