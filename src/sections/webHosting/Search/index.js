import React from "react"
import background from "../../../assets/image/landing-8/domain-bg.png"
const SeachSection = () => {
  return (
    <>
      {/* Domain Search Area */}
      <div
        className="domain-area  bg-position "
        style={{ background: `url(${background})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="domain-area__heading text-center">
                <h2>Looking for domain name?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="domain-search-area">
                <form
                  action="/"
                  className="domain-search-area__search-form"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                >
                  <div className="d-md-flex justify-content-between align-items-center">
                    <div className="d-sm-flex">
                      <div className="domain-search-area__input">
                        <input
                          type="text"
                          className="form-control focus-reset"
                          id="website"
                          name="website"
                          placeholder="Enter your website name"
                        />
                      </div>
                      <div className="domain-search-area__dropdown">
                        <select
                          name="country"
                          id="country"
                          className="nice-select h-100 focus-reset border-0"
                        >
                          <option data-display=".com">.com</option>
                          <option value>.sg</option>
                          <option value>.info</option>
                          <option value>.org</option>
                          <option value>.co</option>
                        </select>
                      </div>
                    </div>
                    <div className="domain-search-area__search-btn">
                      <i className="fas fa fa-search" />
                      <button className="btn btn--search">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="domain-price-area d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap">
                <div className="domain-price-area__single">
                  <span>.com $6.50</span>
                </div>
                <div className="domain-price-area__single">
                  <span>.sg $10</span>
                </div>
                <div className="domain-price-area__single">
                  <span>.info $11</span>
                </div>
                <div className="domain-price-area__single">
                  <span>.co $9.50</span>
                </div>
                <div className="domain-price-area__single">
                  <span>.net $4.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SeachSection
