import React from "react"
import Widget from "./components/FeatureWidget"
import Data from "./data"
const FeatureSection = ({ ...rest }) => {
  return (
    <>
      {/* Features Area */}
      <div className="feature-area-l6 bg-catskillwhite">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-7 col-md-9"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading-2 text-center">
                <h2>Our Solutions</h2>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate.
                </p>
              </div>
            </div>
          </div>
          <div className="row feature-widget-items justify-content-center">
            {Data.map((item, index) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <Widget
                    title={item.title}
                    text={item.text}
                    icon={item.icon}
                    iconClass={item.iconClass}
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

export default FeatureSection
