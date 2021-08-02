import React from "react"
import Widget from "./components/widget"
import imageMain from "../../../../assets/image/landing-5/Dasboard.png"
import Data from "./data"
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-2 */}
      <div className="content-area-l5-2 bg-bunting-aprx">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-7 col-md-9"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>Offer highest transactions rate</h2>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="dashboard-image">
                <img className="w-100" src={imageMain} alt="content two" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center dashboard-feature-items">
            {Data.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <Widget
                    title={item.title}
                    text={item.text}
                    icon={item.icon}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionTwo
