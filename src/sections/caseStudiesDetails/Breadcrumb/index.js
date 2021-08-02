import React from "react"
import bannerImage from "../../../assets/image/case-studies/case-details-banner.png"
const BreadCrumbSection = () => {
  return (
    <>
      {/* Blog main Area  */}
      <div className="case-study-area position-relative overflow-hidden bg-catskillwhite">
  <div className="container">
    <div className="row position-lg-static justify-content-lg-start justify-content-md-center">
      <div className="col-lg-5 col-md-9  position-lg-static">
        <div className="case-study-image bg-position " style={{backgroundImage: `url(${bannerImage})`}}>
          <div className="case-study-img-inner">
            <img className="w-100" src={bannerImage} alt="banner" />
          </div>
        </div>
      </div>
      <div className="col-xl-7 col-lg-7 col-md-9" data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
        <div className="case-study-banner-content">
          <h4>Development</h4>
          <h2>Saas app development
            from idea to live. Bring to
            the table win-win survival
            strategies to ensure.</h2>
          <div className="time-line-area d-flex flex-wrap justify-content-between">
            <div className="time-line">
              <div className="heading">
                <h6>Timeline</h6>
              </div>
              <div className="content">
                <ul className="list-unstyled">
                  <li className="d-inline-flex">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                        <g>
                          <g>
                            <path fill="#0d152e" d="M11 5H9v7h6v-2h-4zm-9 5a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm18 0c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10z" />
                          </g>
                        </g>
                      </svg>
                    </span>
                    2019-2020
                  </li>
                </ul>
              </div>
            </div>
            <div className="time-line">
              <div className="heading">
                <h6>Our Role </h6>
              </div>
              <div className="content">
                <ul className="list-unstyled">
                  <li className="d-inline-flex">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21">
                        <g>
                          <g>
                            <path d="M7.875 13.114a1.993 1.993 0 0 1 0-2.823 2.003 2.003 0 0 1 2.828 0 1.993 1.993 0 0 1-.03 2.79 2.003 2.003 0 0 1-2.797.033zm-5.284 6.032c3.722-3.33 7.995-4.327 12.643-5.52l.446-4.017-4.297-4.297-4.018.446c-1.192 4.648-2.189 8.92-5.52 12.642L.45 17.006c2.828-3.3 3.89-6.952 5.303-13.08l6.364-.706 5.657 5.656-.707 6.363c-6.128 1.414-9.782 2.475-13.081 5.303zm18.358-12.77a.499.499 0 0 1-.278.848l-1.476.23-5.663-5.652.212-1.483a.5.5 0 0 1 .85-.283z" />
                          </g>
                        </g>
                      </svg>
                    </span>
                    Design
                  </li>
                </ul>
              </div>
            </div>
            <div className="time-line">
              <div className="heading">
                <h6>Our Role </h6>
              </div>
              <div className="content">
                <ul className="list-unstyled">
                  <li>David Henricks</li>
                  <li>Mick Jhon</li>
                </ul>
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

export default BreadCrumbSection
