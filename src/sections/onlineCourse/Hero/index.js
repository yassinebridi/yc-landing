import React from "react"
import heroImage from "../../../assets/image/landing-9/hero-banner.png"
import heroImage2 from "../../../assets/image/landing-9/hero-banner.png"
import Video from '../../../components/VideoModal'

const HeroSection = ({ ...rest }) => {
  return (
    <>
      {/* Hero Area */}
      <div className="hero-area-l9 bg-bunting-aprx position-relative overflow-hidden">
  <div className="container">
    <div className="row position-lg-static justify-content-lg-start justify-content-md-center">
      <div className="col-lg-4 col-md-9  position-lg-static">
        <div className="hero-image bg-position " style={{backgroundImage: `url(${heroImage})`}}>
          <div className="hero-img-inner">
            <img className="w-100" src={heroImage2} alt="Hero" />
          </div>
            <Video id="9yc1lfFZX-I" className="video-icon"><i className="fas fa-play font-size-7" /></Video>
        </div>
      </div>
      <div className="col-xl-8 col-lg-7 col-md-9" data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
        <div className="content content--l9-1">
          <div className="content--l9-1__text-box">
            <div className="badge">
              <h6 className="bg-bunting"><span className="badge-offer text-white bg-primary">Offer</span><span className="text-porcelain">The offer is aviable for only first few customers</span></h6>
            </div>
            <h2>Learn design in
              a new way</h2>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>
          </div>
          <div className="content--l9-1__form">
            <form action="#" className="d-sm-flex">
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" />
              <button className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default HeroSection
