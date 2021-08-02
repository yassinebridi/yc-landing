import React from "react"
import Link from "../../../components/Link"
import Brand from "../../../assets/image/landing-7/brand/linkedin.png"
import Brand2 from "../../../assets/image/landing-7/brand/dribble.png"
import Brand3 from "../../../assets/image/landing-7/brand/slack.png"
import Brand4 from "../../../assets/image/landing-7/brand/dot-icon.png"
import Brand5 from "../../../assets/image/landing-7/brand/google-analysis.png"
import Brand6 from "../../../assets/image/landing-7/brand/google-analytic.png"
const IntegrationSection = () => {
  return (
    <>
      {/* Integration Area */}
      {/* Integration Area */}
      <div className="integration-area-l7-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-10 col-xl-11"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="integration-brand-area d-flex flex-wrap justify-content-lg-between justify-content-center">
                <div className="brand-single">
                  <img src={Brand} alt="brand" />
                </div>
                <div className="brand-single">
                  <img src={Brand2} alt="brand" />
                </div>
                <div className="brand-single">
                  <img src={Brand3} alt="brand" />
                </div>
                <div className="brand-single">
                  <img src={Brand4} alt="brand" />
                </div>
                <div className="brand-single">
                  <img src={Brand5} alt="brand" />
                </div>
                <div className="brand-single">
                  <img src={Brand6} alt="brand" />
                </div>
              </div>
            </div>
          </div>
          <div className="row integrate-l7-content justify-content-center">
            <div
              className="col-xxl-4 col-xl-5 col-lg-6 col-md-9"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>Integrated with your favorite tools.</h2>
                <p>
                  It showed a lady fitted out with a fur hat and fur boa who sat
                  upright, raise of the mark
                </p>
                <div className="integrate-l7-btn">
                  <Link to="/" className="btn focus-reset">
                    Try For Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntegrationSection
