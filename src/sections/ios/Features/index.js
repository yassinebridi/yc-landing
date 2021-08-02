import React from "react"
import Link from "../../../components/Link"
import Card from "./components/FeatureCard"
import Data from "./data"
const FeatureSection = ({ ...rest }) => {
  return (
    <>
      {/* Features Area */}
      <div className="feature-area-l7-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-10"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <h2>
                  Mobile-friendly single page wordpress the me for services
                </h2>
              </div>
            </div>
            <div
              className="offset-xxl-1 col-xxl-6 col-xl-6 col-lg-6 col-md-10"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created.
                </p>
                <div className="content__btn">
                  <Link
                    to="/"
                    className="btn  btn--link focus-reset focus-reset"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="feature-card-items-l7-1 d-flex justify-content-lg-between justify-content-center  flex-wrap">
                {Data.map((item, index) => {
                  return (
                    <Card title={item.title} icon={item.icon} key={index} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
