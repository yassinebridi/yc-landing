import React from "react"
import imageMain from "../../../../assets/image/landing-4/video-bg.png"
import Widget from "./components/contentWidget"
import Video from '../../../../components/VideoModal'
const data = [
  {
    icon: "far fa-comment",
    title: "Communication",
    text:
      "Collaboratively administrate how markets via plug and play networks. Dynamically procrastinate",
  },
  {
    icon: "fas fa-layer-group",
    title: "Integration",
    text:
      "Collaboratively administrate how markets via plug and play networks. Dynamically procrastinate",
  },
  {
    icon: "fab fa-servicestack",
    title: "Fast Service",
    text:
      "Collaboratively administrate how markets via plug and play networks. Dynamically procrastinate",
  },
]
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/*Video Content Area l4*/}
      <div className="video-content-area-l4">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-8 col-xl-9 col-lg-10"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>Adding a telemedicine solution has never been easier.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div
                className="video-l4-area bg-position  text-center"
                style={{ background: `url(${imageMain})` }}
              >
                <Video id="9yc1lfFZX-I" className="video-icon"><i className="fas fa-play" /></Video>
                <h6>Watch the video</h6>
              </div>
            </div>
          </div>
          <div className="row video-feature-l4-items">
            {data.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <Widget
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionTwo
