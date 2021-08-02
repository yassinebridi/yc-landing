import React from "react"
import imageMain from "../../../../assets/image/landing-7/contentl7-2.png"
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* Content Area 2*/}
      <div className="content-area-l7-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
              <div
                className="section__heading text-center"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <h2>Take your best decision</h2>
                <p>
                  A legendary actor and director reflects on the innumerable
                  films he watched during his first decades{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center content-l7-2-items">
            <div
              className="offset-lg-1 col-lg-3 order-lg-1 order-2"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l7-2-content-1 d-sm-flex d-lg-block justify-content-sm-between justify-content-lg-start">
                <div className="block-one block-top">
                  <div className="widget">
                    <div className="number">
                      <span>1</span>
                    </div>
                    <h4>Amazing speed</h4>
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring
                    </p>
                  </div>
                </div>
                <div className="block-three">
                  <div className="widget">
                    <div className="number">
                      <span>3</span>
                    </div>
                    <h4>Call to action</h4>
                    <p>
                      I lie close to the earth, a thousand unknown plants are
                      noticed by me: when I hear the buzz of the
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-8 order-lg-2 order-1"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l7-2-center-img">
                <img src={imageMain} alt="content" />
              </div>
            </div>
            <div
              className="col-lg-3 order-lg-3 order-3"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l7-2-content-2 d-sm-flex d-lg-block justify-content-sm-between justify-content-lg-start">
                <div className="block-two block-top">
                  <div className="widget">
                    <div className="number">
                      <span>2</span>
                    </div>
                    <h4>Security grunted</h4>
                    <p>
                      I should be incapable of drawing a single stroke at the
                      present moment; and yet I feel th
                    </p>
                  </div>
                </div>
                <div className="block-four">
                  <div className="widget">
                    <div className="number">
                      <span>4</span>
                    </div>
                    <h4>Life-time support</h4>
                    <p>
                      It showed a lady fitted out with a fur hat and fur boa who
                      sat upright, raise of pricin{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 order-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionTwo
