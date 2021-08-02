import React from "react"
import imageOne from "../../../../assets/image/about/about-img-1.png"
import imageTwo from "../../../../assets/image/about/about-img-2.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* About us content-1 */}
      <div className="about-content-1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-left">
                <img className="w-100" src={imageOne} alt="about content" />
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-right">
                <img className="w-100" src={imageTwo} alt="about content" />
              </div>
            </div>
          </div>
          <div className="row about-content-1-bottom">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <h2>Empower business to achieve success.</h2>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-content">
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking.
                </p>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation
                </p>
                <p>
                  Heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
