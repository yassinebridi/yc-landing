import React from "react"
import Widget from "./components/Widget"
import Data from "./data"
import image from "../../../assets/image/landing-6/circle.png"
import image1 from "../../../assets/image/landing-6/brand-logos/logo-1.png"
import image2 from "../../../assets/image/landing-6/brand-logos/logo-2.png"
import image3 from "../../../assets/image/landing-6/brand-logos/logo-3.png"
import image4 from "../../../assets/image/landing-6/brand-logos/logo-4.png"
import image5 from "../../../assets/image/landing-6/brand-logos/logo-5.png"
import image6 from "../../../assets/image/landing-6/brand-logos/logo-6.png"
import image7 from "../../../assets/image/landing-6/brand-logos/logo-7.png"
const IntegrationSection = () => {
  return (
    <>
      {/* Integration Area */}
      <div className="integrated-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-5"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div
                className="section__heading-2 text-center"
                data-aos="zoom-in"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <h4>Integration</h4>
                <h2>Integrated Platform </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-10"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="integrated-area-image-group">
                <div className="image-1">
                  <img src={image} alt="circle" />
                </div>
                <div className="image-2">
                  <img src={image1} alt="circle" />
                </div>
                <div className="image-3">
                  <img src={image2} alt="circle" />
                </div>
                <div className="image-4">
                  <img src={image3} alt="circle" />
                </div>
                <div className="image-5">
                  <img src={image4} alt="circle" />
                </div>
                <div className="image-6">
                  <img src={image5} alt="circle" />
                </div>
                <div className="image-7">
                  <img src={image6} alt="circle" />
                </div>
                <div className="image-8">
                  <img src={image7} alt="circle" />
                </div>
              </div>
            </div>
          </div>
          <div className="row integrated-block-area justify-content-center">
            {Data.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <Widget title={item.title} icon={item.icon} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default IntegrationSection
