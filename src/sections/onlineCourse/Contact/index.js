import React from "react"

const ContactSection = () => {
  return (
    <div className="contact-l9-1 bg-bunting-aprx">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-7 col-xl-8 col-lg-9 col-md-12"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="contact-l9-1__form-area">
              <div className="contact-l9-1__heading text-center">
                <h2>Get started for only $99</h2>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key
                </p>
              </div>
              <form action="/">
                <div className="contact-l9-1__input">
                  <div className="form-group name-area">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group email-area">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="begin-advance-input d-sm-flex justify-content-between">
                    <div className="form-group beginer">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Beginer"
                      />
                      <div className="check-form">
                        <label
                          htmlFor="terms-check"
                          className="check-input-control d-flex mb-0"
                        >
                          <input
                            className="d-none"
                            type="checkbox"
                            id="terms-check"
                          />
                          <span className="checkbox" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group advanced">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Advanced"
                      />
                      <div className="check-form">
                        <label
                          htmlFor="terms-check-2"
                          className="check-input-control d-flex mb-0"
                        >
                          <input
                            className="d-none"
                            type="checkbox"
                            id="terms-check-2"
                          />
                          <span className="checkbox" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="get-start-btn text-center">
                    <button className="btn">Get Started Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ContactSection;