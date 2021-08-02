import React from "react"
import background from "../../../assets/image/landing-3/cta-bg.png"
import image1 from "../../../assets/image/landing-3/cta-image-1.png"
import image2 from "../../../assets/image/landing-3/cta-image-2.png"
import image3 from "../../../assets/image/landing-3/cta-image-3.png"
import image4 from "../../../assets/image/landing-3/cta-image-4.png"
import image5 from "../../../assets/image/landing-3/cta-image-5.png"
import image6 from "../../../assets/image/landing-3/cta-image-6.png"
import image7 from "../../../assets/image/landing-3/cta-image-7.png"

const CtaSection = ({ ...rest }) => {
  return (
<>
    {/* CTA Area */}
    <div className="cta-area-l3-1 bg-position " style={{background: `url(${background})`}} data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
  <div className="cta-l3-image-group d-none d-md-block">
    <div className="image-1">
      <img className="w-100" src={image1} alt="cta" />
    </div>
    <div className="image-2">
      <img className="w-100" src={image2}  alt="cta" />
    </div>
    <div className="image-3">
      <img className="w-100" src={image3} alt="cta" />
    </div>
    <div className="image-4">
      <img className="w-100" src={image4} alt="cta" />
    </div>
    <div className="image-5">
      <img className="w-100" src={image5} alt="cta" />
    </div>
    <div className="image-6">
      <img className="w-100" src={image6} alt="cta" />
    </div>
    <div className="image-7">
      <img className="w-100" src={image7} alt="cta" />
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
        <div className="cta-l3-content text-center">
          <h2>Express your thought seamlessly with appex.</h2>
          <button className="btn focus-reset">Try it For Free</button>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default CtaSection
