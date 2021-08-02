import React from "react"
import imageOne from "../../../../assets/image/landing-1/feature-2-img-1.png"

const ContentSectionThree = ({ ...rest }) => {
  return (
    <>
    {/* Feature Area-2  */}
<div className="feature-area-2">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-6 col-md-10 col-sm-12 order-lg-0 order-1" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
        <div className="feature-area-2-content">
          <div className="row">
            <div className="col-xl-10 col-lg-12 col-md-10 col-sm-12">
              <div className="section__heading">
                <h2>Make your software better with appex.</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
              </div>
            </div>
          </div>
          <div className="row feature--item">
            <div className="col-lg-7">
              <div className="widget d-inline-flex align-items-center">
                <div className="icon__box">
                  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={22} viewBox="0 0 19 22">
                    <g>
                      <g>
                        <path fill="#416ff4" d="M10.012.313l8.771 5.264a.5.5 0 0 1 0 .858l-9.285 5.573L.213 6.435a.5.5 0 0 1 0-.858L8.983.313a1 1 0 0 1 1.03 0zm8.771 14.607a.501.501 0 0 1 0 .86l-8.77 5.274a.998.998 0 0 1-1.03 0L.213 15.78a.501.501 0 0 1 0-.86l1.202-.723 8.083 4.862 8.083-4.862zM17.581 9.5l1.202.721a.5.5 0 0 1 0 .859l-9.285 5.576L.213 11.08a.5.5 0 0 1 0-.859l1.202-.722 8.083 4.855z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="widget-body">
                  <h6>Easy to Customize<br />
                    Components </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="widget d-inline-flex align-items-center">
                <div className="icon__box icon__box__2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={22} viewBox="0 0 16 22">
                    <g>
                      <g>
                        <path fill="#f7e36d" d="M9 9h7L7 22v-9H0L9 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="widget-body">
                  <h6>User Friendly <br />
                    interface</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-l2-try-btn">
                <button className="btn focus-reset">Try For Free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-10 col-sm-12 order-lg-1 order-0" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
        <div className="feature-area-2-img-group">
          <div className="image__1">
            <img src={imageOne} alt="content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ContentSectionThree
