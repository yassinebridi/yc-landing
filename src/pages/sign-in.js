
import React from "react"
import Link from "../components/Link"

import background from '../assets/image/contact/contact-side-bg.png'
import reviewerImage from '../assets/image/landing-1/reviewer-1.png'
const SignIn = () => {
  return (
    <>
    <div className="sign-in-area">
  <div className="container-fluid no-gutters min-height-100vh">
    <div className="row no-gutters  min-height-100vh justify-content-lg-start justify-content-center py-5">
      <div className="col-lg-6 col-md-8 col-sm-9 position-relative">
        <div className="sign-in-content  justify-content-lg-end">
          <h2>Welcome Back</h2>
          <form action="#">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" className="form-control" placeholder="Your password" />
            </div>
            <div className="d-flex justify-content-between">
              <div className="check-form d-inline-block">
                <label htmlFor="terms-check" className="check-input-control d-flex align-items-center mb-0">
                  <input className="d-none" type="checkbox" id="terms-check" />
                  <span className="checkbox checkbox-2 rounded-check-box " />
                  <span className="remember-text">Remember me</span>
                </label>
              </div>
              <div className="forgot-pass-text">
                <h6><Link to="/reset-password">Forgot passwod?</Link></h6>
              </div>
            </div>
            <div className="sign-in-log-btn">
              <button className="btn focus-reset">Log In</button>
            </div>
            <div className="create-new-acc-text text-center">
              <p>Don't have account? <Link to="/sign-up">Create an account</Link></p>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-6 col-md-10 col-sm-9">
        <div className="fixed-right-bg">
          <div className="full-bg-position min-height-100vh" style={{background: `url(${background})`}}>
            <div className="sign-in-tesimonial-card max-w-465">
              <div className="testimonial__star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="testimonial-body">
                <p>"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.In the first part. "</p>
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

export default SignIn




