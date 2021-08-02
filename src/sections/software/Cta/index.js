import React from "react"
import shape from "../../../assets/image/home-1/footer-shape.png"

const CtaSection = ({ ...rest }) => {
  return (
    <div className="cta-section cta-section--l1 bg-purple-heart dark-mode-texts">
      <div className="footer__shape-1">
        <img className="w-100" src={shape} alt="cta" />
      </div>
      <div className="container">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration={300}
          data-aos-once="true"
        >
          <div className="col-lg-7 col-md-8">
            <div className="section-title text-center">
              <h2 className="section-title__heading">
                It’s easy to get <br className="d-none d-xs-block" /> started.
                Start now.
              </h2>
              {/* Newsletter */}
              <div className="newsletter-form  mx-auto newsletter--l1-2">
                <form action="/.">
                  <div className="d-flex align-items-center justify-content-center flex-column flex-xs-row">
                    <input
                      className="form-control "
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    <button
                      className=" btn btn--lg btn-primary text-white h-70"
                      type="submit"
                    >
                      Start For Free
                    </button>
                  </div>
                </form>
              </div>
              {/*/ .Newsletter */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaSection
