import React from "react"
import imageOne from "../../../assets/image/landing-2/mobile-22.png";
import imageTwo from "../../../assets/image/landing-2/mobile-1-mask.png";
import imageThree from "../../../assets/image/landing-2/mobile-2-chart-1.png";
import imageFour from "../../../assets/image/landing-2/mobile-2-chart-2.png";


const data = [
  {
  icon:"fas fa-rocket",
  title:"Super fast service",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo"
},
  {
    icon:"fas fa-rocket",
    title:"Amazing interface design",
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo"
  },
  {
    icon:"fas fa-rocket",
    title:"Best in marketplace",
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo"
}
] 
const FeatureSection = ({ ...rest }) => {
  return (
   <div className="feature-area-3">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6 col-md-9" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
        <div className="feature-area-3-image-group text-center">
          <div className="image-1">
            <img src={imageOne} alt="feature One" />
          </div>
          <div className="image-2">
            <img src={imageTwo} alt="feature Two" />
          </div>
          <div className="image-3">
            <img src={imageThree} alt="feature Three" />
          </div>
          <div className="image-4">
            <img src={imageFour} alt="feature Four" />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-8" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
        <div className="feature-area-3-content">
          <h2>We help you to
            promote your app.</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempo.</p>
          <div className="feature-area-3-service">
            <ul className="p-0">
              {data.map((item,key) => {
                return(
                  <li className="d-flex align-items-start" key={key}>
                    <div className="service-icon bg-primary text-white square-60">
                      <i className={item.icon} />
                    </div>
                    <div className="service-content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default FeatureSection
