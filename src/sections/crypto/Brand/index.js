import React from "react"

import imageOne from "../../../assets/image/landing-5/logo-1.png"
import imageTwo from "../../../assets/image/landing-5/logo-2.png"
import imageThree from "../../../assets/image/landing-5/logo-3.png"
import imageFour from "../../../assets/image/landing-5/logo-4.png"
import imageFive from "../../../assets/image/landing-5/logo-5.png"
import imageSix from "../../../assets/image/landing-5/logo-1.png"
import imageSeven from "../../../assets/image/landing-5/logo-2.png"

export default function BrandSection() {
  return (
    <>
      {/* Brand Area */}
      <div className="brand-area-l5 bg-haiti">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading text-center">
                <h2>Our trusted partners</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 "
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="brand-items-l5 d-flex justify-content-center align-items-center flex-wrap">
                <div className="single-item">
                  <img src={imageOne} alt="logo" />
                </div>
                <div className="single-item">
                  <img src={imageTwo} alt="logo" />
                </div>
                <div className="single-item">
                  <img src={imageThree} alt="logo" />
                </div>
                <div className="single-item">
                  <img src={imageFour} alt="logo" />
                </div>
                <div className="single-item">
                  <img src={imageFive} alt="logo" />
                </div>
                <div className="single-item">
                  <img src={imageSix} alt="logo" />
                </div>
                <div className="single-item">
                  <img src={imageSeven} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
