import React from "react"
import Card from "./components/FeatureCard"
import Data from "./data"
import { SingleFeature } from "./style"
const FeatureSection = ({ ...rest }) => {
  return (
    <>
      {/* Features Area */}
      <div className="feature-area-l5-1 bg-bunting-aprx">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section__heading text-center">
                <h2>How it works</h2>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-between justify-content-center feature-l5-1-items">
            {Data.map((item, index) => {
              return (
                <SingleFeature
                  className="col-lg-3 col-md-6 col-sm-9"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <Card
                    title={item.title}
                    text={item.text}
                    count={item.count}
                  />
                </SingleFeature>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
