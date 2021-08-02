import React from "react"
import Widget from "./components/FeatureWidget"
import Data from "./data"
const FeatureSection = ({ ...rest }) => {
  return (
    <>
      {/* Features Area */}
      <div className="feature-area-l8-1">
        <div className="container">
          <div className="row feature-area-l8-1__total-item">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="feature-area-l8-1__heading">
                <h2>Benefits of using appex.</h2>
              </div>
            </div>
            {Data.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
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

export default FeatureSection
