import React from "react"
import Link from "../components/Link"

import background from "../assets/image/contact/contact-side-bg.png"
import reviewerImage from "../assets/image/landing-1/reviewer-1.png"
const ResetPassword = () => {
  return (
    <>
      <div className="sign-in-area">
        <div className="container-fluid no-gutters min-height-100vh">
          <div className="row no-gutters  min-height-100vh justify-content-lg-start justify-content-center py-5">
            <div className="col-lg-6 col-md-8 col-sm-9 position-relative">
              <div className="sign-in-content  justify-content-lg-end">
                <h2>Reset Password</h2>
                <form action="#">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="sign-in-log-btn">
                    <button className="btn focus-reset">Send Rest Link</button>
                  </div>
                  <div className="create-new-acc-text text-center">
                    <p>
                      <Link to="#">Back to Log in</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-9">
              <div className="fixed-right-bg">
                <div
                  className="full-bg-position min-height-100vh"
                  style={{ background: `url(${background})` }}
                >
                  <div className="sign-in-tesimonial-card max-w-465">
                    <div className="testimonial__star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="testimonial-body">
                      <p>
                        "Capitalize on low hanging fruit to identify a ballpark
                        value added activity to beta test. Override the digital
                        divide with additional clickthroughs from DevOps.
                        Nanotechnology immersion along the information highway
                        will close the loop on focusing solely on the bottom
                        line.In the first part. "
                      </p>
                    </div>
                    <div className="d-inline-flex">
                      <img src={reviewerImage} alt="reviwer" />
                      <div className="reviewer-designation">
                        <h4>Ann Frank</h4>
                        <span>Marketing Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
