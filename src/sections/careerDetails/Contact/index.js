import React from "react"
import backgroundImage from "../../../assets/image/career/career-details-bg.png"
import SelectBox from "../../../components/Selectbox"

const selectBoxData = [
  {
    label: "Position 1",
    id: "1",
  },
  {
    label: "Position 2",
    id: "2",
  },
  {
    label: "Position 3",
    id: "3",
  },
]
const socialData = [
  {
    label: "facebook",
    id: "1",
  },
  {
    label: "Instagram",
    id: "2",
  },
  {
    label: "Linkedin",
    id: "3",
  },
]

export default function ContactSection() {
  return (
    <>
      <div
        className="apply-contact-form-area bg-position"
        style={{ background: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section__heading text-center">
                <h2>Apply now</h2>
              </div>
              <form className="apply-contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Jhon Deo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your e-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <div className="position-select-area">
                    <SelectBox
                      data={selectBoxData}
                      id="position"
                      placeholder="Choose Position"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="CV">CV (url)</label>
                  <input
                    type="text"
                    id="CV"
                    className="form-control"
                    placeholder="GitHub, LinkedIn etc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="refer">How did you hear about us?</label>
                  <div className="position-select-area">
                  <SelectBox
                      data={socialData}
                      id="refer"
                      placeholder="google , facebook, friend etc"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="messege">Why you are perfect for this role?</label>
                  <textarea
                    type="text"
                    id="messege"
                    className="form-control"
                    placeholder="Tell us more about you"
                  />
                </div>
                <button className="btn focus-reset">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
