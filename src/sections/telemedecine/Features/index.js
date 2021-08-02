import React from "react"
import FeatureWidget from "./components/FeatureWidget"
import CardIconOne from "../../../assets/image/landing-4/doctor-1.png"
import CardIconTwo from "../../../assets/image/landing-4/doctor-2.png"
import CardIconThree from "../../../assets/image/landing-4/doctor-3.png"
const data = [
  {
    iconImage: CardIconOne,
    title: "Only 100% <br class='d-none d-sm-block'> verified doctors",
    text:
      "Leverage agile frameworks to provide a robust synopsis for high level ,",
  },
  {
    iconImage: CardIconTwo,
    title: " 24X7 Online <br class='d-none d-sm-block'> support worldwide",
    text:
      "Capitalize on low hanging fruit to identify a ballpark value added activity",
  },
  {
    iconImage: CardIconThree,
    title: "At very <br class='d-none d-sm-block'> affordable cost",
    text:
      "Collaboratively administrate empowered markets via plug-and-play networks.",
  },
]
const FeatureSection = ({ ...rest }) => {
  return (
    <>
      {/* Features Area l4-1 */}
      <div className="feature-area-l4">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-6 col-xl-6 col-lg-7 col-md-9"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="heading text-center">
                <h2>Reasons why we are the best ?</h2>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center feature-l4-widget-items">
            {data.map((item, key) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={key}
                >
                  <FeatureWidget
                    iconImage={item.iconImage}
                    title={item.title}
                    text={item.text}
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
