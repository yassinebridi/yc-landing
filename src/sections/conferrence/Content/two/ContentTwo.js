import React from "react"
import imageMain from "../../../../assets/image/landing-3/meet-img-1.png"

const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-2 */}
      <div className="content-area-l3-2">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-xl-5 col-lg-5 col-md-8"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-l3-2--image">
                <img
                  className="w-100"
                  src={imageMain}
                  alt="content main"
                />
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-6 col-lg-7 col-md-10"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l3-2-content">
                <div className="section__heading">
                  <h2>Meet anyone, anytime, with faster video call.</h2>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approval.
                  </p>
                </div>
                <div className="content-l3-2-content--list">
                  <ul className="list-unstyled">
                    <li className="d-inline-flex align-items-center">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                      Podcasting operational change update
                    </li>
                    <li className="d-inline-flex align-items-center">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                      Collaboratively administrate empowered markets
                    </li>
                    <li className="d-inline-flex align-items-center">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                      Capitalize on low hanging fruit to identify
                    </li>
                    <li className="d-inline-flex align-items-center">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                      Bring to the table win-win survival{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionTwo
