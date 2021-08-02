import React from "react"
import conentImage from "../../../../assets/image/landing-9/content-img-2.png"
import iconImage1 from "../../../../assets/image/landing-9/google-icon.png"
import iconImage2 from "../../../../assets/image/landing-9/invision.png"
import iconImage3 from "../../../../assets/image/landing-9/slack.png"
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-2*/}

     
<div className="content-area-l9-2">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6 col-md-9 order-lg-0 order-1" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
        <div className="content-l9-2">
          <div className="section__heading-2">
            <h2>Hi, I am David Henricks.?Product Designer.</h2>
            <p>Having 15 years of experience in design field. Design is my passion and sharing my knowledge is my love.
            </p>
          </div>
          <div className="content-l9-2__service">
            <div className="expertise-item row p-0">
              <div className="col-lg-12">
                <div className="expertise-head">
                  <h4>Expertise area :</h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="expertise-single d-flex align-items-center">
                  <div className="icon-area">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>User Experience Design</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="expertise-single  d-flex align-items-center">
                  <div className="icon-area">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>User Interface Design</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="expertise-single  d-flex align-items-center">
                  <div className="icon-area">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>Prototyping</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="expertise-single  d-flex align-items-center">
                  <div className="icon-area">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>Micro Interaction</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="expertise-single  d-flex align-items-center">
                  <div className="icon-area">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>User Research</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-l9-2__work">
            <h4>Previously work at :</h4>
            <ul className="list-unstyled p-0 d-flex flex-wrap">
              <li><img src={iconImage1} alt="google" /></li>
              <li><img src={iconImage2} alt="linkedin" /></li>
              <li><img src={iconImage3} alt="slack" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="offset-lg-2 col-lg-4 col-md-8 col-sm-8 order-lg-1 order-0" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
        <div className="content-area-l9-2--image">
          <img src={conentImage} alt="content" />
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default ContentSectionTwo
