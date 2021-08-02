import React from "react"
import CountDown from "../sections/comingsoon/CountDown"
const Soon = () => {
  return (
    <>
      <div className="coming-soon-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="coming-soon-content">
                <h2>Get beautiful landing page templates for free.</h2>
                <p>
                  With over 25,000 customers worldwide, Appex is the world
                  leading analytics and marketing suite for Instagram and other
                  platforms.
                </p>
                <CountDown />

                <form action="/" className="coming-soon-form-area">
                  <label htmlFor="email">Lets notify you when we are up</label>
                  <div className="d-sm-flex">
                    <div className="com-soon-form">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="com-soon-form-btn">
                      <button className="btn focus-reset">Notify Me</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Soon
