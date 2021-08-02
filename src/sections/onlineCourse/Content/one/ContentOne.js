import React from "react"
import conentImage from "../../../../assets/image/landing-9/content-img-1.png"
import Widget from "./components/FeatureWidget"
import Data from "./data"
const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}

      <div className="content-area-l9-1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-xl-4 col-lg-4 col-md-8 col-sm-8"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-l9-1--image">
                <img src={conentImage} alt="content" />
              </div>
            </div>
            <div
              className="offset-xl-2 col-xl-6 offset-lg-1 col-lg-7 col-md-9"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l9-1">
                <div className="section__heading-2">
                  <h2>Land your dream job faster, without experience.</h2>
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets.
                  </p>
                </div>
                <div className="content-l9-1__service">
                  <ul className="p-0">
                    {Data.map((item, index) => {
                      return (
                        <li className="d-flex align-items-start" key={index}>
                          <Widget
                            title={item.title}
                            text={item.text}
                            icon={item.icon}
                          />
                        </li>
                      )
                    })}
                  </ul>
                  <button className="btn btn-reset">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
